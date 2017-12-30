const Inputs = {
	TEXT: 'TEXT',
	EMAIL: 'EMAIL',
	SEARCH: 'SEARCH',
	NUMBER: 'NUMBER',
	TEXTAREA: 'TEXTAREA',
	CHECKBOX: 'CHECKBOX',
	SELECT: 'SELECT',
	AUTOCOMPLETE: 'AUTOCOMPLETE',
	MULTISELECT: 'MULTISELECT',
	DATEPICKER: 'DATEPICKER',
	TIMEPICKER: 'TIMEPICKER',
	PHONENUMBER: 'PHONENUMBER',
	EXTENSION: 'EXTENSION'
};
Object.defineProperty(Inputs, 'values', {
	get: () => Object.values(Inputs)
});
export default Object.freeze(Inputs);
