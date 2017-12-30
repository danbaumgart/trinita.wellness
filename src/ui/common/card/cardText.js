import React from '../../../utils/react';
import {StylePaper} from '../paper';
import {CardText} from 'material-ui/Card';
const _CardText = ({content}) => <StylePaper zDepth={2}>
	{Array.isArray(content) && content.length > 0 ? (
		content.map((paragraph, index) => <CardText key={index}>{paragraph}</CardText>)
) : (<CardText>{content}</CardText>)}</StylePaper>;
_CardText.propTypes = {
	content: React.PropTypes.oneOfType([
		React.PropTypes.arrayOf(React.PropTypes.string),
		React.PropTypes.string]).isRequired
};
export default _CardText;