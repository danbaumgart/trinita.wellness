import Criteria from '../../constants/criteriaProperties';
export default {
	[Criteria.LENGTH]: (input, maximum) => !input || input.length <= maximum,
	[Criteria.VALUE]: (input, maximum) => !input || input <= maximum
};
