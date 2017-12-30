import React from '../../../utils/react';
import {CardText, Divider} from 'material-ui';
import {StylePaper} from '../../common/paper';
const _PageText = (props) => (
	<div>
		{props.content.map((paragraph, index) =>
			<CardText key={index}>
				{paragraph}
			</CardText>)
		}
	</div>
);
_PageText.propTypes = {
	content: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};
export default _PageText;