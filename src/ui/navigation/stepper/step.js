import React from '../../../utils/react';
import Step from 'material-ui/Stepper/Step';
import StepButton from 'material-ui/Stepper/StepButton';
import {StatusTypes, StatusModel} from '../../../utils/models/status';
import {StatusObjects} from '../../../utils/models/status/handlers';
import StatusIcon from '../../icons/status';
const ClickableStep = (props) => {
	const status = props.submitted ? props.error && StatusObjects[StatusTypes.WARNING] || StatusObjects[StatusTypes.SUCCESS] : null;
	const icon = StatusModel.IsStatusModel(status) ? <StatusIcon status={status}/> : props.icon || null;
    const style = props.active && {cursor: "pointer"} || {};
	const buttonProps = Object.assign({}, icon && {icon}, !props.active && {onClick: props.onRequestStep});
	return (
		<Step
			style={style}
			index={props.index}
			active={props.active}>
			<StepButton {...buttonProps}>
                {props.children}
			</StepButton>

		</Step>
	);
};
ClickableStep.propTypes = {
	onRequestStep: React.PropTypes.func.isRequired,
	index: React.PropTypes.number.isRequired,
	icon: React.PropTypes.node.isRequired,
	active: React.PropTypes.bool,
	completed: React.PropTypes.bool,
	error: React.PropTypes.bool,
	submitted: React.PropTypes.bool
};
ClickableStep.defaultProps = {
	active: false,
	completed: false,
	error: false,
	submitted: false
};
export default ClickableStep;