import React from '../../../../utils/react/index';
import {RaisedButton, FlatButton, FloatingActionButton} from 'material-ui';
const LeftButton = (props) => props.raised ? (
	<RaisedButton
		primary={true}
		labelPosition="after"
		icon={props.icon || null}
		label={props.label}
		style={{width: "50%", left: "0px"}}
		disabled={props.disabled}
		onTouchTap={props.onClick}/>
) : (
	<FlatButton
		primary={true}
		labelPosition="after"
		icon={props.icon || null}
		label={props.label}
		style={{width: "50%", left: "0px"}}
		disabled={props.disabled}
		onTouchTap={props.onClick}/>
);
LeftButton.propTypes = {
	onClick: React.PropTypes.func.isRequired,
	label: React.PropTypes.string.isRequired,
	icon: React.PropTypes.node,
	disabled: React.PropTypes.bool,
	raised: React.PropTypes.bool
};

LeftButton.defaultProps = {
	icon: null,
	disabled: false,
	raised: false
};
export default LeftButton;
