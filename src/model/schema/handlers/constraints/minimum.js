import Criteria from '../../constants/patterns';
import Characters from '../../../pattern/constants/characters';
import {Validate} from '../validation';
export default {
	[Criteria.ALPHA]: Validate.minimumPatternMatch.bind(this, Characters.Alpha),
	[Criteria.NUMERIC]: Validate.minimumPatternMatch.bind(this, Characters.Numeric),
	[Criteria.ALPHANUMERIC]: Validate.minimumPatternMatch.bind(this, Characters.Alphanumeric),
	[Criteria.SPECIAL]: Validate.minimumPatternMatch.bind(this, Characters.Special),
	[Criteria.UPPERCASE]: Validate.minimumPatternMatch.bind(this, Characters.Uppercase),
	[Criteria.LOWERCASE]: Validate.minimumPatternMatch.bind(this, Characters.Lowercase)
};
