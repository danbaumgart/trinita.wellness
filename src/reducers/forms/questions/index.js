import {combineReducers} from 'redux';
import errors from './errors';
import values from './values/questionsReducer';
export default combineReducers({values, errors});