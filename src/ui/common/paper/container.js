import React from '../../../utils/react';
import {StylePaper, Display, Position} from './';
const Container = (props) => (
	<StylePaper position={Position.FIXED} top={64} left={0} right={0} bottom={0} zDepth={0}
		   margin={props.top && {top: props.top} || null}
		   scroll={props.scroll}>
		{props.children}
	</StylePaper>
);
Container.propTypes = {
	top: React.PropTypes.number,
	scroll: React.PropTypes.bool
};
Container.defaultProps = {
	top: 0,
	scroll: false
};
export default Container;