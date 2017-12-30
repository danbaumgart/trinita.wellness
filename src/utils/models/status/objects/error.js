import StatusModel from '../model';
import StatusTypes from '../constants/types';
import Colors from '../../../../config/constants/colors';
import {ErrorIcon} from '../../../../ui/icons/status/index';
class ErrorStatus extends StatusModel {
    constructor() {
        super(StatusTypes.ERROR, Colors.RED, ErrorIcon);
    }
}
export default new ErrorStatus();