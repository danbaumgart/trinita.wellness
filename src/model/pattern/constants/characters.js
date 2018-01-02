const CharacterPatterns = {
	Alpha: `[A-Za-z]`,
	Alphanumeric: `[^_\\W\\s}]`,
	Lowercase: `[a-z]`,
	Numeric: `[\\d]`,
	Special: `[^\\s\\w]|_`,
	Uppercase: `[A-Z]`
};
Object.defineProperties(CharacterPatterns, {
    'keys': {get: () => Object.keys(CharacterPatterns)},
    'values': {get: () => Object.values(CharacterPatterns)}
});
Object.freeze(CharacterPatterns);
export default CharacterPatterns;