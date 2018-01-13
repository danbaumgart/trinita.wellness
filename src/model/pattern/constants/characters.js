const CharacterPatterns = {
	alpha: `[A-Za-z]`,
	alphaNumeric: `[^_\\W\\s}]`,
	lowerCase: `[a-z]`,
	numeric: `[\\d]`,
	special: `[^\\s\\w]|_`,
	upperCase: `[A-Z]`
};
Object.defineProperties(CharacterPatterns, {
    'keys': {get: () => Object.keys(CharacterPatterns)},
    'values': {get: () => Object.values(CharacterPatterns)}
});
Object.freeze(CharacterPatterns);
export default CharacterPatterns;