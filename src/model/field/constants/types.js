const FieldTypes = {
	TEXT: 'TEXT',
	INTEGER: 'INTEGER',
	NUMBER: 'NUMBER',
	DATE: 'DATE',
	TIME: 'TIME',
	EMAIL: 'EMAIL',
	PHONE: 'PHONE',
	BOOLEAN: 'BOOLEAN',
	ARRAY: 'ARRAY'
};
Object.defineProperty(FieldTypes, 'values', {
	get: () => Object.values(FieldTypes)
});
Object.freeze(FieldTypes);
export default FieldTypes;
