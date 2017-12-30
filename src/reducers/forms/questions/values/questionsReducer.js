import ACTIONS from '../../../../actions/types/questions';
import initialState from '../../../../store/initialState/forms/questions/index';

export default function questions(state = initialState.values, action) {
	switch(action.type) {
        case ACTIONS.UPDATE_QUESTIONS_NAME:
            return Object.assign({}, state, {name: action.payload});
        case ACTIONS.UPDATE_QUESTIONS_EMAIL:
            return Object.assign({}, state, {email: action.payload});
        case ACTIONS.UPDATE_QUESTIONS_SUBJECT:
            return Object.assign({}, state, {subject: action.payload});
        case ACTIONS.UPDATE_QUESTIONS_BODY:
            return Object.assign({}, state, {body: action.payload});
		case ACTIONS.SUBMIT_QUESTIONS:
			return Object.assign({}, state, {submitted: true});
		case ACTIONS.SET_QUESTIONS_SAVING_INDICATOR:
			return Object.assign({}, state, {isSaving: action.payload});
        case ACTIONS.CLEAR_QUESTIONS_STATE:
            return Object.assign({}, state, {
				name: '',
				email: '',
				subject: '',
				body: '',
				submitted: false,
				isSaving: false
			});
        default: return state;
    }
}
