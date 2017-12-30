import ACTIONS from '../types/states';
import States from '../../services/states';
import {beginHttpRequest, successfulHttpRequest, failedHttpRequest} from './httpRequests';
function _loadStates(dataSource){
	return {type: ACTIONS.LOAD_STATES_DATA_SOURCE, payload: dataSource};
}
function _updateSearchText(searchText){
	return {type: ACTIONS.UPDATE_STATES_SEARCH_TEXT, payload: searchText};
}
function _clearSearchText(){
	return {type: ACTIONS.CLEAR_STATES_SEARCH_TEXT};
}
export const loadStates = () => function(dispatch) {
	const logger = States.logger.GET;
	return Promise.all([
		States.Get(),
		dispatch(beginHttpRequest(logger))
	]).then(results => Array.isArray(results[0]) && results[0].length > 0 ?
		Promise.all([
			dispatch(_loadStates(results[0])),
			dispatch(successfulHttpRequest(logger.success))]).then(() => results[1]) :
		dispatch(failedHttpRequest(logger.fail)));
};
export const updateSearchText = searchText => function(dispatch) {
	return dispatch(_updateSearchText(searchText));
};
export const clearSearchText = () => function(dispatch){
	return dispatch(_clearSearchText());
};
