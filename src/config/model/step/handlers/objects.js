import {Steps} from '../constants';
import StepObjects from '../objects';
export default {
	[Steps.SCHEDULE]: StepObjects.ScheduleStep,
	[Steps.CONTACT]: StepObjects.ContactStep,
	[Steps.INSTITUTION]: StepObjects.InstitutionStep
};