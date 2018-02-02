import {SchemaPatterns, SchemaTypes} from '../../constants';
import Characters from '../../../pattern/constants/characters';
import {Validate} from '../../../utils/validation';
export default {
    [SchemaTypes.NUMBER]: Validate.typeOfNumber,
    [SchemaTypes.PHONE]: Validate.typeOfPhone,
	[SchemaTypes.EMAIL]: Validate.typeOfEmail,
    [SchemaTypes.INTEGER]: Validate.typeOfInteger,
    [SchemaTypes.DATE]: Validate.typeOfDate,
    [SchemaTypes.TIME]: Validate.typeOfTime,
    [SchemaTypes.BOOLEAN]: Validate.typeOfBoolean,
    [SchemaTypes.ARRAY]: Validate.typeOfArray,
    [SchemaTypes.TEXT]: Validate.typeOfString,
	[SchemaPatterns.ALPHA]: Validate.patternMatch.bind(this, Characters.Alpha),
	[SchemaPatterns.NUMERIC]: Validate.patternMatch.bind(this, Characters.Numeric),
	[SchemaPatterns.ALPHANUMERIC]: Validate.patternMatch.bind(this, Characters.Alphanumeric),
	[SchemaPatterns.SPECIAL]: Validate.patternMatch.bind(this, Characters.Special),
	[SchemaPatterns.UPPERCASE]: Validate.patternMatch.bind(this, Characters.Uppercase),
	[SchemaPatterns.LOWERCASE]: Validate.patternMatch.bind(this, Characters.Lowercase),
	[SchemaPatterns.VALUE]: value => Validate.patternMatch.bind(this, value)
};
