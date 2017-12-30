import {contact, schedule, institution} from '../values';
const Errors = {
	contact: contact.errors,
	schedule: schedule.errors,
	institution: institution.errors
};
Object.seal(Errors);
export default Errors;