import React from '../../../utils/react/index';
import {Paper} from 'material-ui';
import Float from '../../constants/styles/float';
const PageImage = (props) => {
	return (
		<Paper
			zDepth={props.zDepth}
			className={Float.handler[props.float]}
			style={{
				position: "relative",
				padding: "5px",
				maxWidth: `${props.percentWidth || 50}%`,
				marginTop: `${props.top || 15}px`
			}}>
			{props.image ?
				<img src={props.image} width="100%"/> :
				props.children || null}
		</Paper>
	);
};
PageImage.propTypes = {
	image: React.PropTypes.node,
	float: React.PropTypes.oneOf(Float.values),
	percentWidth: React.PropTypes.number,
	top: React.PropTypes.number,
	zDepth: React.PropTypes.number
};
PageImage.defaultProps = {
	image: null,
	float: Float.LEFT,
	percentWidth: 50,
	zDepth: 2
};
export default PageImage;