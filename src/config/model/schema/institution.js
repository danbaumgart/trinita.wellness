import {Institution} from './constants/properties';
import CRITERIA from '../../../utils/validation/constants/criteria';
import SCHEMA from '../../../utils/validation/constants/schema';
import INPUTS from '../../../ui/constants/inputs';
class ValidationSchema {
	constructor(input, required = false) {
		this.input = input;
		this.required = required === true;
	}
}
export default {
	[Institution.NAME]: {
		[SCHEMA.INPUT]: INPUTS.SEARCH,
		[SCHEMA.REQUIRED]: true
	},
	[Institution.STREET]: {
		[SCHEMA.INPUT]: INPUTS.TEXT,
		[SCHEMA.REQUIRED]: true
	},
	[Institution.CITY]: {
		[SCHEMA.INPUT]: INPUTS.TEXT,
		[SCHEMA.REQUIRED]: true
	},
	[Institution.STATE]: {
		[SCHEMA.INPUT]: INPUTS.TEXT,
		[SCHEMA.RESTRICT]: CRITERIA.ALPHA,
		[SCHEMA.REQUIRED]: true
	},
	[Institution.ZIP]: {
		[SCHEMA.INPUT]: INPUTS.TEXT,
		[SCHEMA.REQUIRED]: true
	}
};
