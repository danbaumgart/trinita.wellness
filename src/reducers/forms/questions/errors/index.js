import {UPDATE_QUESTIONS_ERROR_INFO} from '../../../../actions/types/questions';
import initialState from '../../../../store/initialState/forms/questions';

export default function errors(state = initialState.errors, action) {
	switch (action.type) {
		case UPDATE_QUESTIONS_ERROR_INFO:
			return Object.assign({}, state, action.payload);
		default:
			return state;
	}
}