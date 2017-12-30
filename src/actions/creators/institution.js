import ACTIONS from '../types/institution';
import INSTITUTION from '../../services/constants/institutions';
import RESOURCES from '../../services/constants/resources';
import Validation from '../../utils/validation';
import Locations from '../../services/locations';
import {beginHttpRequest, failedHttpRequest, successfulHttpRequest} from './httpRequests';
import schema from '../../config/model/schema/institution';
function _updateInstitutionName(name){
    return {type: ACTIONS.UPDATE_INSTITUTION_NAME, payload: name};
}
function _updateInstitution(location) {
    return {type: ACTIONS.UPDATE_INSTITUTION, payload: location};
}
function _clearInstitution() {
	return {type: ACTIONS.CLEAR_INSTITUTION};
}
function _updateInstitutionCity(city) {
    return {type: ACTIONS.UPDATE_INSTITUTION_CITY, payload: city};
}
function _updateInstitutionState(state) {
    return {type: ACTIONS.UPDATE_INSTITUTION_STATE, payload: state};
}
function _updateInstitutionStreet(street) {
    return {type: ACTIONS.UPDATE_INSTITUTION_STREET, payload: street};
}
function _updateInstitutionZip(zip) {
    return {type: ACTIONS.UPDATE_INSTITUTION_ZIP, payload: zip};
}
function _updateInstitutionErrorInfo(errorInfo) {
    return {type: ACTIONS.UPDATE_INSTITUTION_ERROR_INFO, payload: errorInfo};
}
export const updateInstitutionName = name => function(dispatch){
    dispatch(_updateInstitutionName(name));
};
export const updateInstitutionCity = city => function(dispatch){
    dispatch(_updateInstitutionCity(city));
};
export const updateInstitutionState = state => function(dispatch){
    dispatch(_updateInstitutionState(state));
};
export const updateInstitutionStreet = street => function(dispatch){
    dispatch(_updateInstitutionStreet(street));
};
export const updateInstitutionZip = zip => function(dispatch){
    dispatch(_updateInstitutionZip(zip));
};
export const updateInstitution = selectedUniversity => function(dispatch){
    return Promise.all([
        Validation.validateForm(selectedUniversity, schema),
        dispatch(_updateInstitution(selectedUniversity))
    ]).then(results =>
        dispatch(_updateInstitutionErrorInfo(results[0])));
};
export const clearInstitution = () => function(dispatch) {
    dispatch(_clearInstitution());
};
export const updateInstitutionErrorInfo = errorInfo => function(dispatch){
    dispatch(_updateInstitutionErrorInfo(errorInfo));
};
export const saveInstitution = institution => function(dispatch){
	return Promise.all([
		dispatch(beginHttpRequest(RESOURCES.LOCATIONS)),
		Locations.Post(institution)]
	).then(results => {
		if (results[1]) dispatch(successfulHttpRequest(RESOURCES.LOCATIONS));
		else dispatch(failedHttpRequest(RESOURCES.LOCATIONS));
		return results[1];
	}).catch(error => dispatch(failedHttpRequest(RESOURCES.LOCATIONS)));
};
