import Criteria from '../../constants/criteria';
import PatternHandler from '../patterns';
export default {
	[Criteria.LENGTH]: (input, minimum) => input && input.length >= minimum,
	[Criteria.VALUE]: (input, minimum) => input && input >= minimum,
	[Criteria.ALPHA]: (input, minimum) => PatternHandler.getInstances(input, Criteria.ALPHA).length >= minimum,
	[Criteria.NUMERIC]: (input, minimum) => PatternHandler.getInstances(input, Criteria.NUMERIC).length >= minimum,
	[Criteria.SPECIAL]: (input, minimum) => PatternHandler.getInstances(input, Criteria.SPECIAL).length >= minimum,
	[Criteria.UPPERCASE]: (input, minimum) => PatternHandler.getInstances(input, Criteria.UPPERCASE).length >= minimum,
	[Criteria.LOWERCASE]: (input, minimum) => PatternHandler.getInstances(input, Criteria.LOWERCASE).length >= minimum
};
