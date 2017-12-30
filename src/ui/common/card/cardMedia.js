import React from '../../../utils/react';
import {CardMedia, CardTitle} from 'material-ui/Card';
const _CardMedia = (props) => props.hideOverlay ? (
	<div>
		<CardMedia>
			<img src={props.image} />
		</CardMedia>
		{props.title}
	</div>
) : (
	<CardMedia overlay={props.title}>
		<img src={props.image} />
	</CardMedia>
);
_CardMedia.propTypes = {
	image: React.PropTypes.node.isRequired,
	title: React.PropTypes.node.isRequired,
	hideOverlay: React.PropTypes.bool
};
_CardMedia.defaultProps = {
	title: null,
	hideOverlay: false
};
export default _CardMedia;