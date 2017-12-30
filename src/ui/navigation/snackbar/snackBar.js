import React from '../../../utils/react/index';
import Snackbar from 'material-ui/Snackbar';
import {AlertModel} from '../../../utils/models/alerts';
import Timers from '../../../config/constants/timers';
import ListItem from './listItem';
const snackbar = props => (
	<Snackbar
		onRequestClose={props.onRequestClose}
		bodyStyle={{padding: "0px"}}
		autoHideDuration={Timers.SNACKBAR}
		open={Boolean(props.children)}
		message={<ListItem primaryText={props.children && props.children.message}>{props.children && props.children.status}</ListItem>}
	/>
);
snackbar.propTypes = {
	onRequestClose: React.PropTypes.func.isRequired,
	children: React.PropTypes.instanceOf(AlertModel),
};
snackbar.defaultProps = {
	children: null
};
export default snackbar;