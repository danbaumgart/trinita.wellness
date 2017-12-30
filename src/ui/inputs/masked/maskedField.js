import React from '../../../utils/react';
import Masks from '../../constants/masks';
import VMasker from 'vanilla-masker';
import {TextField} from 'material-ui';
import TypeAttributes from '../../constants/attributes/types';
class MaskedField extends React.PureComponent {
	constructor(props) {
		super(props);
	}
	onChange(maskedValue, event) {
		const newMaskedValue = VMasker.toPattern(event.target.value, this.props.mask);
		if(newMaskedValue !== maskedValue) {
			const unMaskedValue = newMaskedValue.replace(Masks.pattern[this.props.mask], '');
			this.props.onChange(this.props.name, unMaskedValue);
		}
	}
	render() {
		const {mask, label, errors, value, name, type} = this.props;
		const maskedValue = VMasker.toPattern(value, mask);
		const onChange = this.onChange.bind(this, maskedValue);
		return (
			<TextField
				name={this.props.name}
				onChange={onChange}
				floatingLabelText={this.props.label}
				value={maskedValue}
				errorText={this.props.errorText}
				errorStyle={this.props.errorStyle}
				type={this.props.type}
				fullWidth />
		);
	}
}
MaskedField.propTypes = {
	mask: React.PropTypes.oneOf(Masks.values).isRequired,
	name: React.PropTypes.string.isRequired,
	onChange: React.PropTypes.func.isRequired,
	label: React.PropTypes.string.isRequired,
	value: React.PropTypes.string,
	errorText: React.PropTypes.string,
	errorStyle: React.PropTypes.object,
	type: React.PropTypes.oneOf(TypeAttributes.values)
};
MaskedField.defaultProps = {
	value: '',
	errorText: null,
	errorStyle: {},
	type: TypeAttributes.TEXT
};
export default MaskedField;
