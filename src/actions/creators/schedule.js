import ACTIONS from '../types/schedule';
import {DateTime} from '../../utils/dateTime/model';
import Appointments from '../../services/appointments';
import RESOURCES from '../../services/constants/resources';
import {beginHttpRequest, failedHttpRequest, successfulHttpRequest} from './httpRequests';
function _updateScheduleDate(date){
	return {type: ACTIONS.UPDATE_SCHEDULE_DATE, payload: date};
}
function _updateScheduleTime(time){
	return {type: ACTIONS.UPDATE_SCHEDULE_TIME, payload: time};
}
function _updateScheduleFlexible(flexible){
	return {type: ACTIONS.UPDATE_SCHEDULE_FLEXIBLE, payload: flexible};
}
function _updateScheduleDetails(details){
	return {type: ACTIONS.UPDATE_SCHEDULE_DETAILS, payload: details};
}
function _updateScheduleErrorInfo(errorInfo){
	return {type: ACTIONS.UPDATE_SCHEDULE_ERROR_INFO, payload: errorInfo};
}
function _clearScheduleState(){
	return {type: ACTIONS.CLEAR_SCHEDULE_STATE};
}
export const updateScheduleDate = date => function(dispatch){
	dispatch(_updateScheduleDate(date ? DateTime.ToDateModel(date) : null));
};
export const updateScheduleTime = time => function(dispatch){
	dispatch(_updateScheduleTime(time ? DateTime.ToTimeModel(time) : null));
};
export const updateScheduleDetails = details => function(dispatch){
	dispatch(_updateScheduleDetails(details));
};
export const updateScheduleFlexible = flexible => function(dispatch){
	dispatch(_updateScheduleFlexible(flexible));
};
export const updateScheduleErrorInfo = errorInfo => function(dispatch){
	dispatch(_updateScheduleErrorInfo(errorInfo));
};
export const clearScheduleState = () => function(dispatch) {
	return dispatch(_clearScheduleState());
};