import Steps from '../constants/types';
import {StepIcon} from '../../../../ui/icons';
const StepIcons = {
	[Steps.SCHEDULE]: StepIcon.Schedule,
	[Steps.CONTACT]: StepIcon.Contact,
	[Steps.INSTITUTION]: StepIcon.Location
};
export default Object.freeze(StepIcons);