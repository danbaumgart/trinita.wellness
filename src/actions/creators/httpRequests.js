import ACTIONS from '../types/httpRequests';
function _beginHttpRequest(transaction) {
	return {type: ACTIONS.BEGIN_HTTP_REQUEST, payload: transaction};
}
function _successfulHttpRequest(transaction) {
	return {type: ACTIONS.SUCCESSFUL_HTTP_REQUEST, payload: transaction};
}
function _failedHttpRequest(transaction) {
	return {type: ACTIONS.FAILED_HTTP_REQUEST, payload: transaction};
}
let id = 0;
export const beginHttpRequest = (transaction) => function(dispatch) {
	return dispatch(_beginHttpRequest(transaction));
};
export const successfulHttpRequest = transaction => function(dispatch) {
	console.log("TRANSACTION", transaction);
	return dispatch(_successfulHttpRequest(transaction));
};
export const failedHttpRequest = transaction => function(dispatch) {
	console.log("TRANSACTION", transaction);
	return dispatch(_failedHttpRequest(transaction))
};