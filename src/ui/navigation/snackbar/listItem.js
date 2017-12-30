import React from '../../../utils/react/index';
import ListItem from 'material-ui/List/ListItem';
import {StatusModel} from '../../../utils/models/status';
import Colors from '../../../config/constants/colors';

const listItem = (props) => {
	const IconHandler = props.children && props.children.icon;
	const color = props.children && props.children.color || Colors.WHITE;
	return (
		<ListItem
			insetChildren
			style={{border: `1px solid ${props.status && props.status.color || Colors.WHITE}`}}
			innerDivStyle={{color, textAlign: "center"}}
			leftIcon={IconHandler && <IconHandler color={color}/> || null}
			primaryText={<div>{props.primaryText}</div>}
		/>
	);
};
listItem.propTypes = {
	primaryText: React.PropTypes.string,
	children: React.PropTypes.instanceOf(StatusModel)
};
listItem.defaultProps = {
	primaryText: 'NONE',
	children: null
};
export default listItem;