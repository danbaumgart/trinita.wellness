import StatusModel from '../model';
import StatusTypes from '../constants/types';
import Colors from '../../../../config/constants/colors';
import {SuccessIcon} from '../../../../ui/icons/status/index';
class SuccessStatus extends StatusModel {
	constructor() {
		super(StatusTypes.SUCCESS, Colors.GREEN_YELLOW, SuccessIcon);
	}
}
export default new SuccessStatus();