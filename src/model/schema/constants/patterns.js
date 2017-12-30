const SchemaPatterns = {
	ALPHA: 'ALPHA',
	NUMERIC: 'NUMERIC',
	ALPHANUMERIC: 'ALPHANUMERIC',
	SPECIAL: 'SPECIAL',
	UPPERCASE: 'UPPERCASE',
	LOWERCASE: 'LOWERCASE'
};
Object.defineProperty(SchemaPatterns, 'values', {
	get: () => Object.values(SchemaPatterns)
});
Object.freeze(SchemaPatterns);
export default SchemaPatterns;
