import React from '../../../utils/react';
import CardTitle from 'material-ui/Card/CardTitle';
import CardMedia from 'material-ui/Card/CardMedia';

const PageMedia = (props) =>  (
	<CardMedia>
    <div>{props.children}</div>
	</CardMedia>
);
PageMedia.propTypes = {
	title: React.PropTypes.string.isRequired,
	children: React.PropTypes.node.isRequired,
	subtitle: React.PropTypes.string,
	hideOverlay: React.PropTypes.bool,
	overlayStyle: React.PropTypes.object
};
PageMedia.defaultProps = {
	subtitle: null,
	hideOverlay: false,
	overlayStyle: {}
};
export default PageMedia;