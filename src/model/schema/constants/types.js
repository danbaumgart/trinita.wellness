const SchemaTypes = {
	TEXT: 'TEXT',
    PASSWORD: 'PASSWORD',
	BOOLEAN: 'BOOLEAN',
	PHONE: 'PHONE',
	EMAIL: 'EMAIL',
	DATE: 'DATE',
	TIME: 'TIME',
	INTEGER: 'INTEGER',
	NUMBER: 'NUMBER',
	ARRAY: 'ARRAY'
};
Object.defineProperty(SchemaTypes, 'values', {
	get: () => Object.values(SchemaTypes)
});
Object.freeze(SchemaTypes);
export default SchemaTypes;
