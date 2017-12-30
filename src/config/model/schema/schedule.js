import {Schedule} from './constants/properties';
import CRITERIA from '../../../utils/validation/constants/criteria';
import SCHEMA from '../../../utils/validation/constants/schema';
import Inputs from '../../../ui/constants/inputs';
export default {
	[Schedule.TIME]: {
		[SCHEMA.INPUT]: Inputs.TIMEPICKER,
		[SCHEMA.REQUIRED]: true,
		[SCHEMA.RESTRICT]: CRITERIA.TIME
	},
	[Schedule.DATE]: {
		[SCHEMA.INPUT]: Inputs.DATEPICKER,
		[SCHEMA.REQUIRED]: true,
		[SCHEMA.RESTRICT]: CRITERIA.DATE
	},
	[Schedule.DETAILS]: {
		[SCHEMA.INPUT]: Inputs.TEXTAREA,
		[SCHEMA.MAXIMUM]: {[CRITERIA.LENGTH]: 255}
	},
	[Schedule.FLEXIBLE]: {
		[SCHEMA.INPUT]: Inputs.CHECKBOX
	}
};
