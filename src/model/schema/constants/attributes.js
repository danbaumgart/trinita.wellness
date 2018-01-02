import SchemaPatterns from './patterns';
const SchemaAttributes = {
    TYPE: 'type',
    REQUIRED: 'required',
	MINIMUM: 'minimum',
	MAXIMUM: 'maximum',
	PATTERN: 'pattern'
};
Object.assign(SchemaAttributes, SchemaPatterns);
Object.defineProperty(SchemaAttributes, 'values', {
	get: () => Object.values(SchemaAttributes)
});
Object.freeze(SchemaAttributes);
export default SchemaAttributes;
