import {combineReducers} from 'redux';
import pending from './pendingReducer';
import log from './logReducer';
const transactions = combineReducers({pending, log});
export default transactions;