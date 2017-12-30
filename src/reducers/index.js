import {combineReducers} from 'redux';
import app from './navigationReducer';
import forms from './forms';
import alerts from './alertsReducer';
import transactions from './transactions';
import repositories from './repositoriesReducer';
import universities from './universitiesReducer';
export default combineReducers({
    alerts,
    app,
    forms,
    transactions,
    repositories,
    universities
});