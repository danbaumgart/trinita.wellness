import ACTIONS from '../../../../actions/types/schedule';
import initialState from '../../../../store/initialState/forms/appointment/values';
export default function schedule(state = initialState.schedule, action) {
    const {type, payload} = action;
	switch(type) {
        case ACTIONS.UPDATE_SCHEDULE_DATE:
            return Object.assign({}, state, {date: payload});
        case ACTIONS.UPDATE_SCHEDULE_TIME:
            return Object.assign({}, state, {time: payload});
        case ACTIONS.UPDATE_SCHEDULE_FLEXIBLE:
            return Object.assign({}, state, {flexible: payload});
        case ACTIONS.UPDATE_SCHEDULE_DETAILS:
            return Object.assign({}, state, {details: payload});
        case ACTIONS.CLEAR_SCHEDULE_STATE:
            return Object.assign({}, state, {date: null, time: null, flexible: false, details: ''});
        default:
            return state;
    }
}
