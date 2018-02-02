import Criteria from '../../constants/criteriaProperties';
export default {
	[Criteria.ALPHA]: /^[A-Za-z]+$/,
	[Criteria.ALPHANUMERIC]: /^[^_\W\s]+$/,
	[Criteria.NUMERIC]: /^[\d]+$/,
	[Criteria.DATE]: /^(0?\d|1[0-2])\/(0?\d|1\d|2\d|3[01])\/(19|20)\d{2}$/,
	[Criteria.EMAIL]: /^([\w.-]+[^\W])(@[\w.-]+)(\.[^\W_]+)$/,
	[Criteria.TIME]: /^(0?[1-9]|1[0-2])(\s?:\s?)([0-5]\d)(\s?[pPaA][mM])$/
};
