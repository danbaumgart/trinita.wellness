import {combineReducers} from 'redux';
import schedule from './scheduleReducer';
import contact from './contactReducer';
import institution from './institutionReducer';

export default combineReducers({
	contact,
	schedule,
	institution
});
