import message from './values';
export default Object.seal({
	submitted: false,
	isSaving: false,
	values: message,
	errors: message.errors
});
