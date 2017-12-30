import React from '../../utils/react';
import TextField from './textField';
import TYPE_ATTRIBUTES from '../constants/attributes/types';
const ExtensionField = (props) => (
    <TextField
        onChange={props.onChange}
        name={props.name}
        label={props.label}
        value={props.value}
        type={TYPE_ATTRIBUTES.TEL}
        errorText={props.errorText}
        errorStyle={props.errorStyle}/>
);
ExtensionField.propTypes = {
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string,
    errorText: React.PropTypes.string,
    errorStyle: React.PropTypes.object
};

ExtensionField.defaultProps = {
    value: '',
    errorText: null,
    errorStyle: null
};

export default ExtensionField;
