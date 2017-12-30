import Steps from '../constants/types';
import Labels from '../constants/labels';

const StepLabels = {
	[Steps.SCHEDULE]: Labels.Schedule,
	[Steps.CONTACT]: Labels.Contact,
	[Steps.INSTITUTION]: Labels.Location
};
export default Object.freeze(StepLabels);
