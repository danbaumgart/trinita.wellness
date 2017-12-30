import contactModel from '../contact';
import institutionModel from '../institution';
import scheduleModel from '../schedule';
export const contact = contactModel;
export const schedule = scheduleModel;
export const institution = institutionModel;
const Appointment = {
	schedule,
	contact,
	institution
};
Object.seal(Appointment);
export default Appointment;
