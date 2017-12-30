import React from '../../../utils/react/index';
import {StylePaper, Display} from '../paper/index';
import {CardText, Divider} from 'material-ui';
const PageBody = (props) => (
	<StylePaper display={Display.INLINE_BLOCK} span={12}>
		{props.pageImage}
		{Array.isArray(props.content) ?
			props.content.map((paragraph, index) => (
				<StylePaper key={index} margin={5} zDepth={props.zDepth}>
					<CardText>{paragraph}</CardText>
					<Divider />
				</StylePaper>
			)) : props.content}
	</StylePaper>
);

PageBody.propTypes = {
	content: React.PropTypes.oneOfType([
		React.PropTypes.arrayOf(React.PropTypes.string),
		React.PropTypes.node
	]).isRequired,
	zDepth: React.PropTypes.number,
	contentDepth: React.PropTypes.number,
	pageImage: React.PropTypes.node
};
PageBody.defaultProps = {
	zDepth: 1,
	pageImage: null
};
export default PageBody;