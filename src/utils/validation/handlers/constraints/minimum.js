import Criteria from '../../constants/criteria';
import MATCH from '../match';
export default {
	[Criteria.LENGTH]: (input, minimum) => input && input.length >= minimum,
	[Criteria.VALUE]: (input, minimum) => input && input >= minimum,
	[Criteria.ALPHA]: (input, minimum) => MATCH.COUNT(input, Criteria.ALPHA).length >= minimum,
	[Criteria.NUMERIC]: (input, minimum) => MATCH.COUNT(input, Criteria.NUMERIC).length >= minimum,
	[Criteria.SPECIAL]: (input, minimum) => MATCH.COUNT(input, Criteria.SPECIAL).length >= minimum,
	[Criteria.UPPERCASE]: (input, minimum) => MATCH.COUNT(input, Criteria.UPPERCASE).length >= minimum,
	[Criteria.LOWERCASE]: (input, minimum) => MATCH.COUNT(input, Criteria.LOWERCASE).length >= minimum
};
