import Criteria from '../../constants/patterns';
import Characters from '../../../pattern/constants/characters';
import Validate from '../validation';
const MaximumValidation = {
    [Criteria.LENGTH]: Validate.maximumLength,
    [Criteria.VALUE]: Validate.maximumValue,
    [Criteria.ALPHA]: Validate.maximumPatternMatch.bind(this, Characters.Alpha),
    [Criteria.NUMERIC]: Validate.maximumPatternMatch.bind(this, Characters.Numeric),
    [Criteria.ALPHANUMERIC]: Validate.maximumPatternMatch.bind(this, Characters.Alphanumeric),
    [Criteria.SPECIAL]: Validate.maximumPatternMatch.bind(this, Characters.Special),
    [Criteria.UPPERCASE]: Validate.maximumPatternMatch.bind(this, Characters.Uppercase),
    [Criteria.LOWERCASE]: Validate.maximumPatternMatch.bind(this, Characters.Lowercase)
};
export default MaximumValidation;
