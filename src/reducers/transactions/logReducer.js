import ACTIONS from '../../actions/types/httpRequests';
import initialState from '../../store/initialState/transactions';
export default function log(state = initialState.log, action) {
	switch(action.type){
		case ACTIONS.FAILED_HTTP_REQUEST:
			return Object.assign({}, state, {fail: [...state.fail, action.payload]});
		case ACTIONS.SUCCESSFUL_HTTP_REQUEST:
			return Object.assign({}, state, {success: [...state.success, action.payload]});
		default:
			return state;
	}
}
