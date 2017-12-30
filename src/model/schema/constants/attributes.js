import SchemaPatterns from './patterns';
const SchemaAttributes = {
    TYPE: 'TYPE',
    REQUIRED: 'REQUIRED',
	MINIMUM: 'MINIMUM',
	MAXIMUM: 'MAXIMUM',
	PATTERN: 'PATTERN'
};
Object.assign(SchemaAttributes, SchemaPatterns);
Object.defineProperty(SchemaAttributes, 'values', {
	get: () => Object.values(SchemaAttributes)
});
Object.freeze(SchemaAttributes);
export default SchemaAttributes;
