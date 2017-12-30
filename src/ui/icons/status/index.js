import React from "../../../utils/react/index";
import {ActionCheckCircle, AlertError, ActionInfo, AlertWarning} from 'material-ui/svg-icons';
import {StatusModel} from '../../../utils/models/status';
export const WarningIcon = AlertWarning;
export const SuccessIcon = ActionCheckCircle;
export const ErrorIcon = AlertError;
export const InfoIcon = ActionInfo;
const StatusIcon = props => {
	const IconHandler = props.status.icon;
	return <IconHandler color={props.status.color} />;
};
StatusIcon.propTypes = {
	status: React.PropTypes.instanceOf(StatusModel).isRequired
};
export default StatusIcon;