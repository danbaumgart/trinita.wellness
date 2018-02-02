import Criteria from '../../constants/criteriaProperties';
export default {
	[Criteria.ALPHA]: /[A-Za-z]/,
	[Criteria.ALPHANUMERIC]: /[^_\W\s]/,
	[Criteria.LOWERCASE]: /[a-z]/,
	[Criteria.NUMERIC]: /[\d]/,
	[Criteria.SPECIAL]: /([^\w\s]|_)/,
	[Criteria.UPPERCASE]: /[A-Z]/
};
