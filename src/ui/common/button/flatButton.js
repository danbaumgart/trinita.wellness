import React from 'react';
import {FlatButton} from 'material-ui';
import {Horizontal} from '../../constants/styles';
const flatButton = (props) => (
	<FlatButton
		label={props.label}
		primary={props.primary}
		secondary={!props.primary && props.secondary}
		labelPosition={props.icon && props.alignRight ? 'before' : 'after' || null}
		icon={props.icon || null}
		style={Horizontal.handler[props.alignRight ? Horizontal.RIGHT : Horizontal.LEFT]}
		onTouchTap={props.onTouchTap}
		disabled={props.disabled}/>
);

flatButton.propTypes = {
	onTouchTap: React.PropTypes.func.isRequired,
	label: React.PropTypes.string.isRequired,
	icon: React.PropTypes.node,
	alignRight: React.PropTypes.bool,
	disabled: React.PropTypes.bool,
	primary: React.PropTypes.bool,
	secondary: React.PropTypes.bool
};
flatButton.defaultProps = {
	icon: null,
	alignRight: false,
	disabled: false,
	primary: false,
	secondary: false
};
export default flatButton;