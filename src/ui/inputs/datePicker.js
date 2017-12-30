import React from '../../utils/react';
import {DatePicker} from 'material-ui';
import {DateModel} from '../../utils/dateTime/model';
class DatePickerTool extends React.PureComponent {
	constructor(props) {
		super(props);
		this.onUpdateDate = this.onUpdateDate.bind(this);
		this.clearDate = this.clearDate.bind(this);
	}
	onUpdateDate(empty, value) {
		this.props.onChange(this.props.name, value);
	}
	clearDate() {
		this.props.onChange(this.props.name, null);
	}
	render() {
		return (
			<DatePicker
				hintText={this.props.label}
				onDismiss={this.clearDate}
				cancelLabel={'CLEAR'}
				onChange={this.onUpdateDate}
				floatingLabelText={this.props.label}
				textFieldStyle={{width: "100%"}}
				errorText={this.props.errorText}
				errorStyle={this.props.errorStyle}
				value={this.props.value && this.props.value.ToStandardDate() || null}
				mode={'portrait'}
				defaultDate={this.props.value && this.props.value.ToStandardDate() || null}
				autoOk />
		);
	}
}
DatePickerTool.propTypes = {
	name: React.PropTypes.string.isRequired,
	onChange: React.PropTypes.func.isRequired,
	label: React.PropTypes.string.isRequired,
	errorText: React.PropTypes.string,
	errorStyle: React.PropTypes.object,
	value: React.PropTypes.instanceOf(DateModel)
};

DatePickerTool.defaultProps = {
	errorText: null,
	errorStyle: null,
	value: null
};

export default DatePickerTool;
