import States from './constants/states';
import {FieldModel} from '../../../../../model/field';
export const FormStates = States;
export class FormModel {
	constructor(formState = States.CLEAN, fields) {
		const fieldNames = fields && typeof fields === "object" && Object.keys(fields) || [];
		const invalidFieldsByName = fields && fieldNames.length > 0 ?
			fieldNames.filter(fieldName => !FieldModel.IsField(fields[fieldName])) : [];
		if(invalidFieldsByName.length > 0) throw new Error(`INVALID FIELDS: ${invalidFieldsByName.map(name => `{${name}: ${fields[name]}`)}`);
		else this.model = fields;
		this.form = States.values.includes(formState) ? formState : FormStates.CLEAN;
	}
}