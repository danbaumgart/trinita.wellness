import React from '../../utils/react';
import AppBar from 'material-ui/AppBar';
import {AppBarStyles} from '../../config/constants/styles';
const appBar = props => (
	<AppBar
		zDepth={5}
		title={<span>Jennifer Ippolito</span>}
		titleStyle={AppBarStyles.TITLE}
		onLeftIconButtonTouchTap={props.onLeftIconButtonTouchTap}
		onTitleTouchTap={props.onTitleTouchTap}
	/>
);
appBar.propTypes = {
	onLeftIconButtonTouchTap: React.PropTypes.func.isRequired,
	onTitleTouchTap: React.PropTypes.func.isRequired
};
export default appBar;