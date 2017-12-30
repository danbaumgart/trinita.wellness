import ACTIONS from '../../../../actions/types/contacts';
import initialState from '../../../../store/initialState/forms/appointment/values';

export default function contact(state = initialState.contact, action) {
	switch(action.type) {
        case ACTIONS.UPDATE_CONTACT_FIRST_NAME:
            return Object.assign({}, state, {firstName: action.payload});
        case ACTIONS.UPDATE_CONTACT_LAST_NAME:
            return Object.assign({}, state, {lastName: action.payload});
        case ACTIONS.UPDATE_CONTACT_EMAIL_ADDRESS:
            return Object.assign({}, state, {emailAddress: action.payload});
        case ACTIONS.UPDATE_CONTACT_PHONE_NUMBER:
            return Object.assign({}, state, {phoneNumber: action.payload});
        case ACTIONS.UPDATE_CONTACT_EXTENSION:
            return Object.assign({}, state, {extension: action.payload});
        case ACTIONS.CLEAR_CONTACT_STATE:
            return Object.assign({}, state, {firstName: '', lastName: '', emailAddress: '', phoneNumber: '', extension: ''});
        default: return state;
    }
}
