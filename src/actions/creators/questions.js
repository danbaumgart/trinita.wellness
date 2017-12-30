import ACTIONS from '../types/questions';
import Questions from '../../services/questions';
import {beginHttpRequest, failedHttpRequest, successfulHttpRequest} from './httpRequests';
function _updateQuestionsName(name){
    return {type: ACTIONS.UPDATE_QUESTIONS_NAME, payload: name};
}
function _updateQuestionsEmail(email){
    return {type: ACTIONS.UPDATE_QUESTIONS_EMAIL, payload: email};
}
function _updateQuestionsSubject(subject){
    return {type: ACTIONS.UPDATE_QUESTIONS_SUBJECT, payload: subject};
}
function _updateQuestionsBody(body){
    return {type: ACTIONS.UPDATE_QUESTIONS_BODY, payload: body};
}
function _setSavingIndicator(isSaving = false) {
	return {type: ACTIONS.SET_QUESTIONS_SAVING_INDICATOR, payload: isSaving === true};
}
function _submitQuestions(){
	return {type: ACTIONS.SUBMIT_QUESTIONS};
}
function _updateQuestionsErrorInfo(errorInfo){
    return {type: ACTIONS.UPDATE_QUESTIONS_ERROR_INFO, payload: errorInfo};
}
function _clearQuestionsState(){
	return {type: ACTIONS.CLEAR_QUESTIONS_STATE};
}
export const updateName = name => function(dispatch){
    dispatch(_updateQuestionsName(name));
};
export const updateEmail = email => function(dispatch){
    dispatch(_updateQuestionsEmail(email));
};
export const updateSubject = subject => function(dispatch){
    dispatch(_updateQuestionsSubject(subject));
};
export const updateBody = body => function(dispatch){
    dispatch(_updateQuestionsBody(body));
};
export const updateQuestionsErrorInfo = errorInfo => function(dispatch){
	dispatch(_updateQuestionsErrorInfo(errorInfo));
};
export const submitQuestions = questions => function(dispatch){
	return Promise.all([
		dispatch(_submitQuestions()),
		dispatch(_setSavingIndicator(true)),
		Questions.Post(questions)]
	).then(results => {
		if(results[2]) dispatch(_clearQuestionsState());
		return results[2];
	}).catch(err => {
		console.log("ERROR", err);
		dispatch(_setSavingIndicator(false));
	});
};
