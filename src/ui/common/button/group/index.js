import React from '../../../../utils/react';
import LeftButton from './leftButton';
import RightButton from './rightButton';
const ButtonGroup = (props) => (
	<div style={props.containerStyle}>
		<LeftButton
			onClick={props.onLeftClick}
			icon={props.leftIcon || null}
			label={props.leftLabel}
			disabled={props.isLeftDisabled}/>
		<RightButton
			onClick={props.onRightClick}
			icon={props.rightIcon || null}
			label={props.rightLabel}
			disabled={props.isRightDisabled}/>
	</div>
);
ButtonGroup.propTypes = {
	onRightClick: React.PropTypes.func.isRequired,
	onLeftClick: React.PropTypes.func.isRequired,
	rightLabel: React.PropTypes.string.isRequired,
	leftLabel: React.PropTypes.string.isRequired,
	rightIcon: React.PropTypes.node,
	leftIcon: React.PropTypes.node,
	isRightDisabled: React.PropTypes.bool,
	isLeftDisabled: React.PropTypes.bool,
	containerStyle: React.PropTypes.object
};

ButtonGroup.defaultProps = {
	rightIcon: null,
	leftIcon: null,
	isRightDisabled: false,
	isLeftDisabled: false,
	isFinalStep: false,
	containerStyle: {width: '100%'}
};
export default ButtonGroup;
