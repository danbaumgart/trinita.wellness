import alerts from './alerts';
import transactions from     './transactions/index';
import app from './app';
import repositories from './repositories';
import universities from './universities';
import forms from './forms';
const state = {
    forms,
	transactions,
    alerts,
    app,
    repositories,
	universities
};
Object.seal(state);
export default state;
