import {Alerts} from '../constants';
import Status from '../../status/constants/types';
const AlertStatuses = {
	[Alerts.SUCCESS]: Status.SUCCESS,
	[Alerts.FAILURE]: Status.WARNING,
	[Alerts.DEFAULT]: Status.INFO
};
export default Object.freeze(AlertStatuses);