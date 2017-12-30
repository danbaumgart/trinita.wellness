import React from '../../utils/react';
import TextField from './textField';
import TYPE_ATTRIBUTES from '../constants/attributes/types';
const EmailField = (props) => (
    <TextField
        onChange={props.onChange}
        name={props.name}
        label={props.label}
        value={props.value}
        type={TYPE_ATTRIBUTES.EMAIL}
        errorText={props.errorText}
        errorStyle={props.errorStyle}/>
);
EmailField.propTypes = {
	name: React.PropTypes.string.isRequired,
	onChange: React.PropTypes.func.isRequired,
	label: React.PropTypes.string.isRequired,
	value: React.PropTypes.string,
	errorText: React.PropTypes.string,
	errorStyle: React.PropTypes.object
};

EmailField.defaultProps = {
	value: '',
	errorText: null,
	errorStyle: null
};

export default EmailField;
