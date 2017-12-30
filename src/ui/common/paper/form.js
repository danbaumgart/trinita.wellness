import React from '../../../utils/react';
import Paper from './';
export default (props) => (
	<Paper position="relative" margin={5} padding={10} zDepth={1} left={0} right={0}>
		{props.children}
	</Paper>
);