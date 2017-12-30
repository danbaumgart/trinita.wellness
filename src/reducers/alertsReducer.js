import ACTIONS from '../actions/types/alerts';
import initialState from '../store/initialState';
import Alerts from '../utils/models/alerts/constants/types';
import {AlertModel, AlertTypes} from '../utils/models/alerts/index';

export default function alerts(state = initialState.alerts, action) {
    switch (action.type) {
        case ACTIONS.CREATE_FAILURE_ALERT:
            return Object.assign({}, state, {
                queue: [...state.queue, new AlertModel(action.payload, Alerts.FAILURE)]
            });
        case ACTIONS.CREATE_SUCCESS_ALERT:
            return Object.assign({}, state, {
                queue: [...state.queue, new AlertModel(action.payload, Alerts.SUCCESS)]
            });
        case ACTIONS.CREATE_ALERT:
            return Object.assign({}, state, action.payload instanceof AlertModel && {
                queue: [...state.queue, action.payload]
            });
        case ACTIONS.UPDATE_ALERT_QUEUE:
            return Object.assign({}, state, Array.isArray(action.payload) && action.payload.every(AlertModel.IsAlertModel) && {
                queue: [...state.queue, ...action.payload]
            });
        case ACTIONS.UPDATE_ALERT_QUEUE_POSITION:
            return Object.assign({}, state, state.queue[state.position] && {
                position: state.position + 1
            });
        default:
            return state;
    }
}