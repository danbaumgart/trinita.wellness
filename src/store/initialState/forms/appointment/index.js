import values from './values';
import errors from './errors';
const appointment = {
	values,
	errors,
	visitedSteps: [],
	loading: false,
	saving: false,
	submitted: false,
	stepIndex: 0
};
Object.seal(appointment);
export default appointment;
