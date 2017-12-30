import StatusTypes from '../constants/types';
import {InfoStatus, SuccessStatus, WarningStatus, ErrorStatus} from '../objects';
const StatusObjects = {
	[StatusTypes.ERROR]: ErrorStatus,
	[StatusTypes.SUCCESS]: SuccessStatus,
	[StatusTypes.WARNING]: WarningStatus,
	[StatusTypes.INFO]: InfoStatus
};
export default Object.freeze(StatusObjects);