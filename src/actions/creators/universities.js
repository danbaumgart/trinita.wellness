import Actions from '../types/universities';
import Universities from '../../services/universities';
import Resources from '../../services/constants/resources';
import {beginHttpRequest, successfulHttpRequest, failedHttpRequest} from './httpRequests';
function _loadUniversities(dataSource){
	return {type: Actions.LOAD_UNIVERSITIES_DATA_SOURCE, payload: dataSource};
}
function _updateUniversities(dataSource){
	return {type: Actions.UPDATE_UNIVERSITIES_DATA_SOURCE, payload: dataSource};
}
function _clearUniversities(){
	return {type: Actions.CLEAR_UNIVERSITIES_DATA_SOURCE};
}
function _updateSearchText(searchText){
	return {type: Actions.UPDATE_UNIVERSITIES_SEARCH_TEXT, payload: searchText};
}
function _clearSearchText(){
	return {type: Actions.CLEAR_UNIVERSITIES_SEARCH_TEXT};
}
function _openSearchDialog() {
	return {type: Actions.OPEN_UNIVERSITY_SEARCH_DIALOG};
}
function _closeSearchDialog() {
	return {type: Actions.CLOSE_UNIVERSITY_SEARCH_DIALOG};
}
export const updateUniversities = searchText => function(dispatch) {
	const logger = Universities.logger.GET;
	return Promise.all([
		dispatch(beginHttpRequest(logger)),
		Universities.SearchByName(searchText)]
	).then(results => Array.isArray(results[1]) && results[1].length > 0 ? Promise.all([
		dispatch(_updateUniversities(results[1])),
		dispatch(successfulHttpRequest(logger.success))
	]) : dispatch(failedHttpRequest(logger.fail))
	).catch(err => dispatch(failedHttpRequest(logger.fail)));
};
export const loadUniversities = () => function(dispatch) {
	const logger = Universities.logger.GET;
	return Promise.all([
		dispatch(beginHttpRequest(logger)),
		Universities.SearchByName('', 10000)
	]).then(results => Array.isArray(results[1]) && results[1].length > 0 ?
		Promise.all([
			dispatch(_loadUniversities(results[1])),
			dispatch(successfulHttpRequest(logger.success))]
		) : dispatch(failedHttpRequest(logger.fail))
	).catch(() => {
		dispatch(_clearUniversities());
		dispatch(failedHttpRequest(logger.fail));
	});
};
export const clearUniversities = () => function(dispatch){
	return dispatch(_clearUniversities());
};
export const updateSearchText = searchText => function(dispatch){
	return Promise.resolve(dispatch(_updateSearchText(searchText)));
};
export const clearSearchText = () => function(dispatch){
	return dispatch(_clearSearchText());
};
export const openSearchDialog = () => function(dispatch){
	return dispatch(_openSearchDialog());
};
export const closeSearchDialog = () => function(dispatch){
	return Promise.resolve(dispatch(_closeSearchDialog()));
};
