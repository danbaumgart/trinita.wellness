import ContactStepObject from './contact';
import ScheduleStepObject from './schedule';
import InstitutionStepObject from './institution';
const StepObjects = {
	ScheduleStep: ScheduleStepObject,
	ContactStep: ContactStepObject,
	InstitutionStep: InstitutionStepObject
};
export default Object.freeze(StepObjects);

