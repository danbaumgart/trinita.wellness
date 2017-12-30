const ContactProperties = {
	FIRST_NAME: 'firstName',
	LAST_NAME: 'lastName',
	EMAIL_ADDRESS: 'emailAddress',
	PHONE_NUMBER: 'phoneNumber',
	EXTENSION: 'extension'
};
Object.defineProperty(ContactProperties, "values", {
	get: () => Object.values(ContactProperties)
});
Object.freeze(ContactProperties);
export default ContactProperties;