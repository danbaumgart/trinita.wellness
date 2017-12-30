import Steps from '../constants/types';
import {ContactSchema, ScheduleSchema, InstitutionSchema} from '../../schema/index';
const StepSchema = {
	[Steps.SCHEDULE]: ScheduleSchema,
	[Steps.CONTACT]: ContactSchema,
	[Steps.INSTITUTION]: InstitutionSchema
};
export default Object.freeze(StepSchema);
