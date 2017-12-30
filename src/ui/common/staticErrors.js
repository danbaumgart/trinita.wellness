import React from '../../utils/react';

const StaticErrors = ({errors}) =>
	<ul>{errors.map((error, index) => <li key={index}>{error}</li>)}</ul>;
StaticErrors.propTypes = {
	errors: React.PropTypes.oneOfType([
		React.PropTypes.arrayOf(React.PropTypes.string),
		React.PropTypes.arrayOf(React.PropTypes.node)]).isRequired
};
export default StaticErrors;
