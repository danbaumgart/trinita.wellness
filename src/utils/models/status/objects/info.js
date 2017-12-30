import StatusModel from '../model';
import StatusTypes from '../constants/types';
import Colors from '../../../../config/constants/colors';
import {InfoIcon} from '../../../../ui/icons/status/index';
class InfoStatus extends StatusModel {
	constructor() {
		super(StatusTypes.INFO, Colors.WHITE, InfoIcon);
	}
}
export default new InfoStatus();