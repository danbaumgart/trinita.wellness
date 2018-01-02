import {SchemaPatterns} from '../../constants';
import CharacterPatterns from '../../../pattern/constants/characters';
const CharacterPatternHandler = {
	[SchemaPatterns.ALPHA]: CharacterPatterns.Alpha,
	[SchemaPatterns.ALPHANUMERIC]: CharacterPatterns.Alphanumeric,
	[SchemaPatterns.LOWERCASE]: CharacterPatterns.Lowercase,
	[SchemaPatterns.NUMERIC]: CharacterPatterns.Numeric,
	[SchemaPatterns.SPECIAL]: CharacterPatterns.Special,
	[SchemaPatterns.UPPERCASE]: CharacterPatterns.Uppercase
};
Object.defineProperties(CharacterPatternHandler, {
    'keys': {get: () => Object.keys(CharacterPatternHandler)},
    'values': {get: () => Object.values(CharacterPatternHandler)}
});
Object.freeze(CharacterPatternHandler);
export default CharacterPatternHandler;