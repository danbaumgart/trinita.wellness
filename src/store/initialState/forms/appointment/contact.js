import {FieldModel} from '../../../../model/field';
import {ValidationModel} from '../model/schema';
import {SchemaPatterns, SchemaTypes} from '../model/schema/constants';
const schema = {
	firstName: new ValidationModel(true, SchemaTypes.TEXT, SchemaPatterns.ALPHA),
	lastName: new ValidationModel(true, SchemaTypes.TEXT, SchemaPatterns.ALPHA),
	emailAddress: new ValidationModel(true, SchemaTypes.EMAIL),
	phoneNumber: new ValidationModel(true, SchemaTypes.PHONE),
	extension: new ValidationModel(false, SchemaTypes.INTEGER)
};
const contact = {
	firstName: new FieldModel(schema.firstName),
	lastName: new FieldModel(schema.lastName),
	emailAddress: new FieldModel(schema.emailAddress),
	phoneNumber: new FieldModel(schema.phoneNumber),
	extension: new FieldModel(schema.extension)
};
Object.seal(contact);
export default contact;
