import StatusModel from '../model';
import StatusTypes from '../constants/types';
import Colors from '../../../../config/constants/colors';
import {WarningIcon} from '../../../../ui/icons/status/index';
class WarningStatus extends StatusModel {
	constructor() {
		super(StatusTypes.WARNING, Colors.ORANGE, WarningIcon);
	}
}
export default new WarningStatus();