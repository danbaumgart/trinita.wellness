import ACTIONS from '../types/alerts';
function _createSuccessAlertNotification(message) {
	return {type: ACTIONS.CREATE_SUCCESS_ALERT, payload: message};
}
function updateAlertNotificationQueue(alertNotifications) {
    return {type: ACTIONS.UPDATE_ALERT_QUEUE, payload: alertNotifications};
}
function createAlertNotification(alertNotification) {
    return {type: ACTIONS.CREATE_ALERT, payload: alertNotification};
}
function createFailureAlertNotification(message) {
	return {type: ACTIONS.CREATE_FAILURE_ALERT, payload: message};
}
function updateAlertNotificationQueuePosition(reason) {
  return {type: ACTIONS.UPDATE_ALERT_QUEUE_POSITION, payload: reason};
}
export const createErrorAlert = message => function(dispatch) {
  return dispatch(createFailureAlertNotification(message));
};
export const createAlertAsync = alert => function(dispatch) {
    return Promise.resolve(dispatch(createAlertNotification(alert)));
};
export const createSuccessAlert = message => function(dispatch) {
	return dispatch(_createSuccessAlertNotification(message));
};
export const closeAlertNotification = (reason) => function(dispatch) {
  return dispatch(updateAlertNotificationQueuePosition(reason));
};
export const updateAlertNotifications = (alertNotifications) => function(dispatch) {
	console.log("ALERTS", alertNotifications);
    return dispatch(updateAlertNotificationQueue(alertNotifications));
};