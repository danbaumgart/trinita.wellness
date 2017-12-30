import {SchemaPatterns, SchemaTypes} from '../../constants';
import PatternHandler from '../patterns';
export default {
	[SchemaPatterns.EMAIL]: input => PatternHandler.matchEntire(input, SchemaTypes.EMAIL),
	[SchemaPatterns.NUMBER]: input => !Number.isNaN(Number(input)),
	[SchemaPatterns.INTEGER]: input => this[SchemaPatterns.NUMBER](input) && Number(input) % 1 === 0 || PatternHandler.matchEntire(input, SchemaPatterns.NUMERIC),
	[SchemaPatterns.ALPHA]: input => PatternHandler.matchEntire(input, SchemaPatterns.ALPHA),
	[SchemaPatterns.NUMERIC]: input => PatternHandler.matchEntire(input, SchemaPatterns.NUMERIC),
	[SchemaPatterns.ALPHANUMERIC]: input => PatternHandler.matchEntire(input, SchemaPatterns.ALPHANUMERIC),
	[SchemaPatterns.SPECIAL]: input => PatternHandler.matchEntire(input, SchemaPatterns.SPECIAL),
	[SchemaPatterns.UPPERCASE]: input => PatternHandler.matchEntire(input, SchemaPatterns.UPPERCASE),
	[SchemaPatterns.LOWERCASE]: input => PatternHandler.matchEntire(input, SchemaPatterns.LOWERCASE),
	[SchemaPatterns.VALUE]: (input, value) => new RegExp('^' + value + '$').test(input)
};
