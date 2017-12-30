import React from '../../utils/react';
import Menu from 'material-ui/Menu/Menu';
import MenuItem from 'material-ui/MenuItem';
import {AppStyles} from '../../config/constants/styles';
import {LinkModel} from '../../config/model/link';
const DrawerMenu = props => (
	<Menu
		style={AppStyles.MENU}
		onChange={props.onChange}
		value={props.value}>
		{props.children.map(link => (
			<MenuItem
				key={link.route}
				value={link}
				primaryText={link.label}
			/>
		))}
	</Menu>
);
DrawerMenu.propTypes = {
	onChange: React.PropTypes.func.isRequired,
	children: React.PropTypes.arrayOf(React.PropTypes.instanceOf(LinkModel)).isRequired,
	value: React.PropTypes.instanceOf(LinkModel)
};
DrawerMenu.defaultProps = {
	value: null
};
export default DrawerMenu;
