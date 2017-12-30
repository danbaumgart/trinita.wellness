import ACTIONS from '../../actions/types/httpRequests';
import initialState from '../../store/initialState/transactions';
export default function httpRequests(state = initialState.pending, action) {
	switch(action.type){
		case ACTIONS.BEGIN_HTTP_REQUEST:
			return Object.assign({}, state, {
				[action.payload.resource]: [...state[action.payload.resource], action.payload]
				//state[action.payload.resource] || state[action.payload.resource] === 0 ? 1 + state[action.payload.resource] : 1
			});
		case ACTIONS.FAILED_HTTP_REQUEST:
		case ACTIONS.SUCCESSFUL_HTTP_REQUEST:
			return Object.assign({}, state, {
				[action.payload.resource]: state[action.payload.resource].filter(entry => entry.id !== action.payload.id)
				//state[action.payload.resource] || state[action.payload.resource] > 0 ? state[action.payload.resource] - 1 : 0
			});
		default:
			return state;
	}
}
