import {Steps, Labels} from '../constants/index';
import {ScheduleSchema} from '../../schema/index';
import StepModel from '../model';
class ScheduleStep extends StepModel {
	constructor(){
		super(Steps.SCHEDULE, Labels.Schedule, ScheduleSchema);
	}
}
export default new ScheduleStep();