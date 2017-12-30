import {combineReducers} from 'redux';
import questions from './questions';
import appointment from './appointment';
export default combineReducers({appointment, questions});