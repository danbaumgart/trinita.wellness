import React from '../../../utils/react';
import Paper from 'material-ui/Paper';
import StyleUtils from '../../../utils/style';
import {Display, Position} from '../../constants/styles/index';
const StylePaper = (props) => {
	const {zDepth, padding, margin, display, position, span, height, scroll, top, bottom, left, right} = props;
	const location = {top, bottom, left, right};
	const style = Object.assign({},
		props.style && {props:{style}},
		padding && StyleUtils.reduceProp(padding, "padding"),
		margin && StyleUtils.reduceProp(margin, "margin"),
		location && StyleUtils.mapLocation(location),
		span && StyleUtils.mapWidth(span),
		height && StyleUtils.reduceProp(height, "height"),
		display && {display},
		position && {position},
		scroll && {overflow: "auto"}
	);
	return (
		<Paper zDepth={zDepth} style={style}>
			{props.children}
		</Paper>
	);
};

StylePaper.propTypes = {
	zDepth: React.PropTypes.number,
	display: React.PropTypes.oneOf(Display.values),
	position: React.PropTypes.oneOf(Position.values),
	padding: React.PropTypes.oneOfType([
		React.PropTypes.arrayOf(React.PropTypes.number),
		React.PropTypes.arrayOf(React.PropTypes.object),
		React.PropTypes.object,
		React.PropTypes.number
	]),
	margin: React.PropTypes.oneOfType([
		React.PropTypes.arrayOf(React.PropTypes.number),
		React.PropTypes.arrayOf(React.PropTypes.object),
		React.PropTypes.object,
		React.PropTypes.number
	]),
	top: React.PropTypes.number,
	bottom: React.PropTypes.number,
	left: React.PropTypes.number,
	right: React.PropTypes.number,
	height: React.PropTypes.number,
	span: React.PropTypes.number,
	style: React.PropTypes.object,
	scroll: React.PropTypes.bool
};
StylePaper.defaultProps = {
	zDepth: 1,
	display: null,
	position: null,
	padding: 0,
	margin: 0,
	top: null,
	bottom: null,
	left: null,
	right: null,
	height: null,
	span: null,
	style: null,
	scroll: false
};
export default StylePaper;