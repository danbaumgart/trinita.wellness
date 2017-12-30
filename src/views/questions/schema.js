import QUESTIONS from './properties';
import CRITERIA from '../../utils/validation/constants/criteria';
import SCHEMA from '../../utils/validation/constants/schema';
import INPUTS from '../../ui/constants/inputs';
export default {
	[QUESTIONS.NAME]: {
		[SCHEMA.INPUT]: INPUTS.TEXT,
		[SCHEMA.REQUIRED]: false,
		[SCHEMA.RESTRICT]: CRITERIA.ALPHA
	},
	[QUESTIONS.EMAIL]: {
		[SCHEMA.INPUT]: INPUTS.EMAIL,
		[SCHEMA.REQUIRED]: true,
		[SCHEMA.RESTRICT]: CRITERIA.EMAIL
	},
	[QUESTIONS.SUBJECT]: {
		[SCHEMA.INPUT]: INPUTS.TEXT,
		[SCHEMA.REQUIRED]: true,
		[SCHEMA.RESTRICT]: CRITERIA.ALPHANUMERIC
	},
	[QUESTIONS.BODY]: {
		[SCHEMA.INPUT]: INPUTS.TEXTAREA,
		[SCHEMA.REQUIRED]: true,
		[SCHEMA.RESTRICT]: CRITERIA.ALPHANUMERIC
	}
};
