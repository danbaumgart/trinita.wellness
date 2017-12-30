import React from '../../utils/react';
const StaticError = ({message}) => <span style={{color: 'red'}}>{message}</span>;
StaticError.propTypes = {
	message: React.PropTypes.string.isRequired
};
export default StaticError;
