import Status from '../constants/types';
import Colors from '../../../../config/constants/colors';
const StatusColors = {
	[Status.WARNING]: Colors.ORANGE,
	[Status.ERROR]: Colors.ORANGE,
	[Status.SUCCESS]: Colors.GREEN_YELLOW,
	[Status.INFO]: Colors.WHITE
};
export default Object.freeze(StatusColors);
