import React from '../../../utils/react';
import {RaisedButton, FlatButton, FloatingActionButton} from 'material-ui';
import {ImageNavigateNext, ImageNavigateBefore, ContentSend} from 'material-ui/svg-icons';
const StepperNavigation = (props) => (
	<div style={{position: "fixed", bottom: "0px", width: "100%"}}>
		<RaisedButton
			primary={true}
			labelPosition="after"
			icon={<ImageNavigateBefore />}
			label={props.leftLabel || "Previous"}
			style={{width: "50%", left: "0px", margin: `${props.padding || 0}px`}}
			disabled={props.isLeftDisabled}
			onTouchTap={props.onLeftClick}/>
		<RaisedButton
			secondary={props.isFinalStep}
			labelPosition="before"
			primary={!props.isFinalStep}
			icon={props.isFinalStep ? <ContentSend/> : <ImageNavigateNext />}
			style={{width: "50%", position: "absolute", right: "0px", margin: `${props.padding || 0}px`}}
			label={props.rightLabel || "Next"}
			onTouchTap={props.onRightClick}
			disabled={props.isRightDisabled}/>
	</div>
);
StepperNavigation.propTypes = {
	onRightClick: React.PropTypes.func.isRequired,
	onLeftClick: React.PropTypes.func.isRequired,
	rightLabel: React.PropTypes.string,
	leftLabel: React.PropTypes.string,
	isRightDisabled: React.PropTypes.bool,
	isLeftDisabled: React.PropTypes.bool,
	isFinalStep: React.PropTypes.bool,
	padding: React.PropTypes.number
};

StepperNavigation.defaultProps = {
	rightLabel: null,
	leftLabel: null,
	isRightDisabled: false,
	isLeftDisabled: false,
	isFinalStep: false,
	padding: 0
};
export default StepperNavigation;
