import ACTIONS from '../actions/types/universities';
import initialState from './../store/initialState';
export default function universities(state = initialState.universities, action) {
	switch(action.type){
		case ACTIONS.LOAD_UNIVERSITIES_DATA_SOURCE:
			return Object.assign({}, state, {dataSource: [...action.payload]});
		case ACTIONS.OPEN_UNIVERSITY_SEARCH_DIALOG:
			return Object.assign({}, state, {showDialog: true});
		case ACTIONS.UPDATE_UNIVERSITIES_SEARCH_TEXT:
			return Object.assign({}, state, {searchText: action.payload});
		case ACTIONS.CLOSE_UNIVERSITY_SEARCH_DIALOG:
			return Object.assign({}, state, {showDialog: false, dataSource: [], searchText: ''});
		case ACTIONS.UPDATE_UNIVERSITIES_DATA_SOURCE:
			return Object.assign({}, state, {dataSource: [...action.payload]});
		default:
			return state;
	}
}
