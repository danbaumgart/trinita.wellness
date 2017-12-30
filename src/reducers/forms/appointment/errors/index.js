import {UPDATE_CONTACT_ERROR_INFO} from '../../../../actions/types/contacts';
import {UPDATE_INSTITUTION_ERROR_INFO} from '../../../../actions/types/institution';
import {UPDATE_SCHEDULE_ERROR_INFO} from '../../../../actions/types/schedule';
import initialState from '../../../../store/initialState/forms/appointment';

export default function errors(state = initialState.errors, action) {
	switch (action.type) {
		case UPDATE_CONTACT_ERROR_INFO:
			return Object.assign({}, state, {contact: action.payload});
		case UPDATE_INSTITUTION_ERROR_INFO:
			return Object.assign({}, state, {institution: action.payload});
		case UPDATE_SCHEDULE_ERROR_INFO:
			return Object.assign({}, state, {schedule: action.payload});
		default:
			return state;
	}
}