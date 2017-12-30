import States from './constants/states';
import ValidationModel from "../schema";
import {SchemaTypes} from '../schema/constants';
export const FieldStates = States;
export class FieldModel {
	constructor(schema, value, fieldState = null, errors = []) {
		if(!ValidationModel.isInstance(schema))
		this.schema = ValidationModel.IsValidationModel(schema) ? schema : new ValidationModel();
		this.value = value || FieldModel.GetDefaultValue(this.schema.type);
		this.state = fieldState && FieldStates.values.includes(fieldState) ? fieldState : FieldStates.CLEAN;
		this.errors = Array.isArray(errors) && errors.every(error => typeof error === "string") ? errors : [];
	}
	static GetDefaultSchema(schema) {

	}
	static GetDefaultValue(type) {
		switch(type) {
			case SchemaTypes.TEXT:
			case SchemaTypes.EMAIL:
			case SchemaTypes.PHONE:
				return '';
			case SchemaTypes.ARRAY:
				return [];
			case SchemaTypes.BOOLEAN:
				return false;
			default:
				return null;
		}
	}
	static IsField(field) {
		return field instanceof FieldModel;
	}
}
export default FieldModel;
