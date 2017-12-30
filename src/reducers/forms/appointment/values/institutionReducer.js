import Actions from '../../../../actions/types/institution';
import initialState from '../../../../store/initialState/forms/appointment/values';
export default function institution(state = initialState.institution, action) {
    switch(action.type) {
        case Actions.UPDATE_INSTITUTION_NAME:
            return Object.assign({}, state, {name: action.payload});
        case Actions.UPDATE_INSTITUTION_CITY:
            return Object.assign({}, state, {city: action.payload});
        case Actions.UPDATE_INSTITUTION_STATE:
            return Object.assign({}, state, {state: action.payload});
        case Actions.UPDATE_INSTITUTION_STREET:
            return Object.assign({}, state, {street: action.payload});
        case Actions.UPDATE_INSTITUTION_ZIP:
            return Object.assign({}, state, {zip: action.payload});
        case Actions.CLEAR_INSTITUTION:
            return Object.assign({}, state, {name: '', street: '', city: '', state: '', zip: ''});
        case Actions.UPDATE_INSTITUTION:
        case Actions.SAVE_INSTITUTION:
            return Object.assign({}, state, action.payload);
        default: return state;
    }
}
