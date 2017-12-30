import ACTIONS from '../actions/types/appointment';
import initialState from '../store/initialState/forms';
export default function appointmentReducer(state = initialState.appointment, action) {
    switch (action.type) {
        case ACTIONS.UPDATE_STEP_INDEX:
            return Object.assign({}, state,
                {stepIndex: action.payload, loading: true}, !state.visitedSteps.includes(action.payload) &&
                {visitedSteps: [...state.visitedSteps, action.payload]});
        case ACTIONS.BEGIN_LOADING_TRANSITION:
            return Object.assign({}, state, {loading: true});
        case ACTIONS.END_LOADING_TRANSITION:
            return Object.assign({}, state, {loading: false});
        case ACTIONS.SET_SAVING_INDICATOR:
            return Object.assign({}, state, {saving: Boolean(action.payload)});
        case ACTIONS.SUBMIT_APPOINTMENT:
            return Object.assign({}, state, {submitted: Boolean(action.payload)});
        case ACTIONS.CLEAR_APPOINTMENT_STATE:
            return Object.assign({}, state, {visitedSteps: [], loading: false, saving: false, submitted: false, stepIndex: 0});
        default:
            return state;
    }
}