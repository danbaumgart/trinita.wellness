const SchemaAttributes = {
    TYPE: 'type',
    REQUIRED: 'required',
	MINIMUM: 'minimum',
	MAXIMUM: 'maximum',
	PATTERN: 'pattern'
};
Object.defineProperty(SchemaAttributes, 'values', {
	get: () => Object.values(SchemaAttributes)
});
Object.freeze(SchemaAttributes);
export default SchemaAttributes;
