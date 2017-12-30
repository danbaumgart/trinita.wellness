import Criteria from '../../constants/criteria';
export default {
	[Criteria.LENGTH]: (input, maximum) => !input || input.length <= maximum,
	[Criteria.VALUE]: (input, maximum) => !input || input <= maximum
};
