import React from '../../../utils/react';
import MaskedField from './maskedField';
import Masks from '../../constants/masks';
import TypeAttributes from '../../constants/attributes/types';
const PhoneNumber = (props) => (
	<MaskedField
		name={props.name}
		type={TypeAttributes.TEL}
		label={props.label}
		value={props.value}
		errorText={props.errorText}
		errorStyle={props.errorStyle}
		mask={Masks.AREA_CODE}
		onChange={props.onChange}/>
);
PhoneNumber.propTypes = {
	name: React.PropTypes.string.isRequired,
	onChange: React.PropTypes.func.isRequired,
	label: React.PropTypes.string.isRequired,
	value: React.PropTypes.string,
	errorText: React.PropTypes.string,
	errorStyle: React.PropTypes.object
};
PhoneNumber.defaultProps = {
	value: '',
	errorText: null,
	errorStyle: {}
};
export default PhoneNumber;
