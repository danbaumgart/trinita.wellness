import {SchemaPatterns} from '../../constants';
import {Pattern} from '../../../pattern';
const CharacterPatternHandler = {
	[SchemaPatterns.ALPHA]: Pattern.Criteria.alpha,
	[SchemaPatterns.ALPHANUMERIC]: Pattern.Criteria.alphanumeric,
	[SchemaPatterns.LOWERCASE]: Pattern.Criteria.lowercase,
	[SchemaPatterns.NUMERIC]: Pattern.Criteria.numeric,
	[SchemaPatterns.SPECIAL]: Pattern.Criteria.special,
	[SchemaPatterns.UPPERCASE]: Pattern.Criteria.uppercase
};
Object.defineProperties(CharacterPatternHandler, {
    'keys': {get: () => Object.keys(CharacterPatternHandler)},
    'values': {get: () => Object.values(CharacterPatternHandler)}
});
Object.freeze(CharacterPatternHandler);
export default CharacterPatternHandler;