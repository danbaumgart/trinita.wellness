import React from '../../utils/react';
import Drawer from 'material-ui/Drawer';
import {DrawerStyles} from '../../config/constants/styles';
const AppDrawer = props => (
	<Drawer
		width={230}
		docked={false}
		open={props.open}
		containerStyle={DrawerStyles.CONTAINER}>
		{props.children}
	</Drawer>
);

AppDrawer.propTypes = {
	open: React.PropTypes.bool
};
AppDrawer.defaultProps = {
	open: false
};
export default AppDrawer;
