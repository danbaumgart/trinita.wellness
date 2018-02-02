import Criteria from '../../constants/criteriaProperties';
import MATCH from '../match';
export default {
	[Criteria.EMAIL]: (input) => MATCH.ENTIRE(input, Criteria.EMAIL),
	[Criteria.NUMBER]: (input) => !Number.isNaN(Number(input)),
	[Criteria.INTEGER]: (input) => input % 1 === 0,
	[Criteria.ALPHA]: (input) => MATCH.ENTIRE(input, Criteria.ALPHA),
	[Criteria.NUMERIC]: (input) => MATCH.ENTIRE(input, Criteria.NUMERIC),
	[Criteria.ALPHANUMERIC]: (input) => MATCH.ENTIRE(input, Criteria.ALPHANUMERIC),
	[Criteria.SPECIAL]: (input) => MATCH.ENTIRE(input, Criteria.SPECIAL),
	[Criteria.UPPERCASE]: (input) => MATCH.ENTIRE(input, Criteria.UPPERCASE),
	[Criteria.LOWERCASE]: (input) => MATCH.ENTIRE(input, Criteria.LOWERCASE),
	[Criteria.VALUE]: (input, value) => new RegExp('^' + value + '$').test(input)
};
