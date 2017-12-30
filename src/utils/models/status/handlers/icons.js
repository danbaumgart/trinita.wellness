import Status from '../constants/types';
import {WarningIcon, SuccessIcon, InfoIcon, ErrorIcon} from '../../../../ui/icons/status';
const StatusIcons = {
	[Status.WARNING]: WarningIcon,
	[Status.ERROR]: ErrorIcon,
	[Status.SUCCESS]: SuccessIcon,
	[Status.INFO]: InfoIcon
};
Object.defineProperty(StatusIcons, 'values', {
	get: () => Object.values(StatusIcons)
});
export default Object.freeze(StatusIcons);
