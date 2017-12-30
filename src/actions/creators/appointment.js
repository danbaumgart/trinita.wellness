import ACTIONS from '../types/appointment';
import {clearContactState} from './contact';
import {clearScheduleState} from './schedule';
import {clearInstitution} from './institution';
import {createErrorAlert, createSuccessAlert} from './alerts';

import Contacts from '../../services/contacts';
import Locations from '../../services/locations';
import Appointments from '../../services/appointments';

function _updateStepIndex(stepIndex) {
	return {type: ACTIONS.UPDATE_STEP_INDEX, payload: stepIndex};
}

function _submitAppointment(appointment) {
	return {type: ACTIONS.SUBMIT_APPOINTMENT, payload: appointment};
}

function _beginLoadingTransition() {
	return {type: ACTIONS.BEGIN_LOADING_TRANSITION};
}

function _completeLoadingTransition() {
	return {type: ACTIONS.END_LOADING_TRANSITION};
}

function _setSavingIndicator(saving) {
	return {type: ACTIONS.SET_SAVING_INDICATOR, payload: saving};
}

export const updateStepIndex = stepIndex => function (dispatch) {
	return dispatch(_updateStepIndex(stepIndex));
};
export const completeLoadingTransition = () => function (dispatch) {
	return dispatch(_completeLoadingTransition());
};
export const beginLoadingTransition = () => function (dispatch) {
	return dispatch(_beginLoadingTransition());
};
const _clearAppointmentState = () => ({type: ACTIONS.CLEAR_APPOINTMENT_STATE});
const Alerts = {
	VALIDATION_ERRORS: "Please correct all form errors.",
	APPOINTMENT_ERROR: "Error creating appointment request.",
	EMAIL_NOTIFICATION_ERROR: "Error sending email notification.",
	EMAIL_NOTIFICATION_SUCCESS: "Email notification sent.",
	APPOINTMENT_SUCCESS: "Appointment request successful."
};

export const submitAppointment = appointment => function (dispatch) {

	return Promise.resolve(dispatch(_submitAppointment(true))).then(() => {
		if (!appointment || !appointment.schedule || !appointment.contact || !appointment.institution)
			return Promise.resolve(dispatch(createErrorAlert(Alerts.VALIDATION_ERRORS)));
		return Promise.all([
			Contacts.Post(appointment.contact),
			Locations.Post(appointment.institution),
			dispatch(_setSavingIndicator(true))
		]).then(results => Appointments.Post(appointment.schedule, results[0].id, results[1].id))
			.then(results => !results || !results.id ? dispatch(createErrorAlert(Alerts.APPOINTMENT_ERROR)) :
				Appointments.PostNotification(results.id))
			.then(result => result.status.code !== 200 ? dispatch(createErrorAlert(Alerts.EMAIL_NOTIFICATION_ERROR)) :
				Promise.all([
					dispatch(_setSavingIndicator(false)),
					dispatch(_clearAppointmentState()),
					dispatch(clearScheduleState()),
					dispatch(clearContactState()),
					dispatch(clearInstitution()),
					dispatch(createSuccessAlert(Alerts.APPOINTMENT_SUCCESS))
				]).then(() => dispatch(createSuccessAlert(Alerts.EMAIL_NOTIFICATION_SUCCESS)))
					.catch(error => Promise.all([
						dispatch(_setSavingIndicator(false)),
						dispatch(createErrorAlert(Alerts.APPOINTMENT_ERROR))
					]).then(() => Promise.resolve(error))));
	});
};