import {Steps} from './constants/index';
import ContentHandler from './handlers/content';
import IconHandler from './handlers/icons';
import Validation from '../../../utils/validation';
class StepModel {
	constructor(step, label, schema) {
		if (!Steps.values.includes(step)) StepModel.ThrowInvalidStepError(step);
		this.index = Steps.values.findIndex(stepValue => stepValue === step);
		this.value = step;
		this.label = label;
		this.schema = schema;
		this.icon = IconHandler[step];
	}
	getStepContent() {
		return ContentHandler[this.value];
	}
	static ThrowInvalidStepError(step) {
		throw new Error(`INVALID STEP VALUE: ${step} PROVIDED TO STEP MODEL`);
	}
	static IsStepModel(model) {
		return model instanceof StepModel;
	}
	validateModel(formModel) {
		return Validation.validateForm(formModel, this.schema);
	}
}
export default StepModel;