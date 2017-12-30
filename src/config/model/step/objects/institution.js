import {Steps, Labels} from '../constants/index';
import {InstitutionSchema} from '../../schema/index';
import StepModel from '../model';
class InstitutionStep extends StepModel {
	constructor(){
		super(Steps.INSTITUTION, Labels.Location, InstitutionSchema);
	}
}
export default new InstitutionStep();