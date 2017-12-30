import {Steps, Labels} from '../constants/index';
import {ContactSchema} from '../../schema/index';
import StepModel from '../model';
class ContactStep extends StepModel {
	constructor(){
		super(Steps.CONTACT, Labels.Contact, ContactSchema);
	}
}
export default new ContactStep();