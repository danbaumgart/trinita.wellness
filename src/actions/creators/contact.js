import ACTIONS from '../types/contacts';
import Contacts from '../../services/contacts';
import Resources from '../../services/constants/resources';
import {beginHttpRequest, failedHttpRequest, successfulHttpRequest} from './httpRequests';
export const beginPostContactRequest = contact => function(dispatch) {
	return dispatch(beginHttpRequest(Resources.CONTACTS))
}
function _updateContactFirstName(firstName){
    return {type: ACTIONS.UPDATE_CONTACT_FIRST_NAME, payload: firstName};
}
function _updateContactLastName(lastName){
    return {type: ACTIONS.UPDATE_CONTACT_LAST_NAME, payload: lastName};
}
function _updateContactEmailAddress(emailAddress){
    return {type: ACTIONS.UPDATE_CONTACT_EMAIL_ADDRESS, payload: emailAddress};
}
function _updateContactPhoneNumber(phoneNumber){
    return {type: ACTIONS.UPDATE_CONTACT_PHONE_NUMBER, payload: phoneNumber};
}
function _updateContactExtension(extension){
    return {type: ACTIONS.UPDATE_CONTACT_EXTENSION, payload: extension};
}
function _updateContactErrorInfo(errorInfo){
    return {type: ACTIONS.UPDATE_CONTACT_ERROR_INFO, payload: errorInfo};
}
function _clearContactState(){
	return {type: ACTIONS.CLEAR_CONTACT_STATE};
}
export const updateFirstName = firstName => function(dispatch){
    dispatch(_updateContactFirstName(firstName));
};
export const updateLastName = lastName => function(dispatch){
    dispatch(_updateContactLastName(lastName));
};
export const updateEmailAddress = emailAddress => function(dispatch){
    dispatch(_updateContactEmailAddress(emailAddress));
};
export const updatePhoneNumber = phoneNumber => function(dispatch){
    dispatch(_updateContactPhoneNumber(phoneNumber));
};
export const updateExtension = extension => function(dispatch){
    dispatch(_updateContactExtension(extension));
};
export const clearContactState = () => function(dispatch){
	dispatch(_clearContactState());
};
export const updateContactErrorInfo = errorInfo => function(dispatch){
	dispatch(_updateContactErrorInfo(errorInfo));
};
