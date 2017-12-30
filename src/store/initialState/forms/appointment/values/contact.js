import {FieldModel} from '../../../../../model/field';
const Contact = {
	firstName: new FieldModel(),
	lastName: new FieldModel(),
	emailAddress: new FieldModel(),
	phoneNumber: new FieldModel(),
	extension: new FieldModel()
};
Object.seal(Contact);
export default Contact;
