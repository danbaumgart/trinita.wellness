import ACTIONS from '../actions/types/app';
import initialState from '../store/initialState';
import {IsLinkModel} from '../config/model/link';
import {IsStepModel} from '../config/model/step';
export default function(state = initialState.app, action) {
	switch (action.type) {
		case ACTIONS.CLOSE_DRAWER:
			return Object.assign({}, state, {
				showDrawer: false
			});
		case ACTIONS.TOGGLE_DRAWER:
			return Object.assign({}, state, {
				showDrawer: !state.showDrawer
			});
		case ACTIONS.LOAD_LINKS:
			return Object.assign({}, state, Array.isArray(action.payload) && action.payload.every(IsLinkModel) && {
				links: action.payload
			});
		case ACTIONS.LOAD_STEPS:
			return Object.assign({}, state, Array.isArray(action.payload) && action.payload.every(IsStepModel) && {
				steps: action.payload,
				currentStep: action.payload[0]
			});
		case ACTIONS.UPDATE_CURRENT_STEP:
			return Object.assign({}, state, IsStepModel(action.payload) && {
				currentStep: action.payload
			});
		default:
			return state;
	}
}