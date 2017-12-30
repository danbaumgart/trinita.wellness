import React from '../../utils/react';
import TextField from './textField';
const TextArea = (props) => (
	<TextField
		multiLine
		label={props.label}
		name={props.name}
		value={props.value}
		errorText={props.errorText}
		errorStyle={props.errorStyle}
		onChange={props.onChange}
	/>
);
TextArea.propTypes = {
	name: React.PropTypes.string.isRequired,
	onChange: React.PropTypes.func.isRequired,
	label: React.PropTypes.string.isRequired,
	value: React.PropTypes.string,
	errorText: React.PropTypes.any,
	errorStyle: React.PropTypes.object
};

TextArea.defaultProps = {
	value: '',
	errorText: null,
	errorStyle: null
};

export default TextArea;