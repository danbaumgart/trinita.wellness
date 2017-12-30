import {SchemaPatterns} from '../../constants';
const CharacterPatterns = {
	[SchemaPatterns.ALPHA]: `[A-Za-z]`,
	[SchemaPatterns.ALPHANUMERIC]: `[^_\\W\\s}]`,
	[SchemaPatterns.LOWERCASE]: `[a-z]`,
	[SchemaPatterns.NUMERIC]: `[\\d]`,
	[SchemaPatterns.SPECIAL]: `[^\\s\\w]|_`,
	[SchemaPatterns.UPPERCASE]: `[A-Z]`
};
Object.defineProperties(CharacterPatterns, {
    'keys': {get: () => Object.keys(CharacterPatterns)},
    'values': {get: () => Object.values(CharacterPatterns)}
});
Object.freeze(CharacterPatterns);
export default CharacterPatterns;