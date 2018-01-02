const SchemaTypes = {
	TEXT: 'text',
    PASSWORD: 'password',
	BOOLEAN: 'boolean',
	PHONE: 'phone',
	EMAIL: 'email',
	DATE: 'date',
	TIME: 'time',
	INTEGER: 'integer',
	NUMBER: 'number',
	ARRAY: 'array'
};
Object.defineProperty(SchemaTypes, 'values', {
	get: () => Object.values(SchemaTypes)
});
Object.freeze(SchemaTypes);
export default SchemaTypes;
