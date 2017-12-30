import React from '../../../../utils/react/index';
import {RaisedButton, FlatButton, FloatingActionButton} from 'material-ui';
const RightButton = (props) => props.raised ? (
	<RaisedButton
		secondary={!props.primary}
		labelPosition="before"
		icon={props.icon || null}
		style={{width: "50%", position: "absolute", right: "0px"}}
		label={props.label}
		onTouchTap={props.onClick}
		disabled={props.disabled}/>
) : (
	<FlatButton
		secondary={!props.primary}
		labelPosition="before"
		icon={props.icon || null}
		style={{width: "50%", position: "absolute", right: "0px"}}
		label={props.label}
		onTouchTap={props.onClick}
		disabled={props.disabled}/>
);
RightButton.propTypes = {
	onClick: React.PropTypes.func.isRequired,
	label: React.PropTypes.string.isRequired,
	icon: React.PropTypes.node,
	disabled: React.PropTypes.bool,
	raised: React.PropTypes.bool
};

RightButton.defaultProps = {
	icon: null,
	disabled: false,
	raised: false
};
export default RightButton;