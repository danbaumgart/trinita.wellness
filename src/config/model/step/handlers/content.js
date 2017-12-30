import Steps from '../constants/types';
import {SchedulePage, LocationPage, ContactPage} from '../../../../views/appointment/index';
const StepContent = {
	[Steps.SCHEDULE]: SchedulePage,
	[Steps.CONTACT]: ContactPage,
	[Steps.INSTITUTION]: LocationPage
};
export default Object.freeze(StepContent);
