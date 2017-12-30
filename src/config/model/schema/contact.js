import {Contact} from './constants/properties';
import CRITERIA from '../../../utils/validation/constants/criteria';
import SCHEMA from '../../../utils/validation/constants/schema';
import INPUTS from '../../../ui/constants/inputs';

export default {
	[Contact.FIRST_NAME]: {
		[SCHEMA.INPUT]: INPUTS.TEXT,
		[SCHEMA.REQUIRED]: true,
		[SCHEMA.RESTRICT]: CRITERIA.ALPHA,
		[SCHEMA.MINIMUM]: {[CRITERIA.LENGTH]: 1}
	},
	[Contact.LAST_NAME]: {
		[SCHEMA.INPUT]: INPUTS.TEXT,
		[SCHEMA.REQUIRED]: true,
		[SCHEMA.RESTRICT]: CRITERIA.ALPHA,
		[SCHEMA.MINIMUM]: {[CRITERIA.LENGTH]: 2}
	},
	[Contact.EMAIL_ADDRESS]: {
		[SCHEMA.INPUT]: INPUTS.EMAIL,
		[SCHEMA.REQUIRED]: true,
		[SCHEMA.RESTRICT]: CRITERIA.EMAIL
	},
	[Contact.PHONE_NUMBER]: {
		[SCHEMA.INPUT]: INPUTS.PHONENUMBER,
		[SCHEMA.REQUIRED]: false,
		[SCHEMA.RESTRICT]: CRITERIA.NUMERIC,
		[SCHEMA.MINIMUM]: {[CRITERIA.LENGTH]: 10}
	},
	[Contact.EXTENSION]: {
		[SCHEMA.INPUT]: INPUTS.EXTENSION
	}
};
