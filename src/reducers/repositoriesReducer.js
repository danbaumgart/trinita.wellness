import UniversitiesActions from '../actions/types/universities';
import StatesActions from '../actions/types/states';
import initialState from '../store/initialState';
import {ToLocation} from '../store/initialState/forms/appointment/institution';
export default function repositories(state = initialState.repositories, action) {
	switch (action.type) {
		case UniversitiesActions.LOAD_UNIVERSITIES_DATA_SOURCE:
			return Object.assign({}, state, {
				universities: Object.assign({}, state.universities, ...action.payload.map(university => ({[university.id]: ToLocation(university)})))
			});
		case StatesActions.LOAD_STATES_DATA_SOURCE:
			return Object.assign({}, state, {
				states: Object.assign({}, state.states, ...action.payload.map(province => ({[province.id]: province})))
			});
		default:
			return state;
	}
}