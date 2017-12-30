import React from '../../utils/react';
import {TimePicker} from 'material-ui';
import {TimeModel} from '../../utils/dateTime/model';

class TimePickerTool extends React.PureComponent {
	constructor(props) {
		super(props);
		this.onUpdateTime = this.onUpdateTime.bind(this);
        this.clearTime = this.clearTime.bind(this);
	}
	onUpdateTime(empty, value) {
        this.props.onChange(this.props.name, value);
    }
    clearTime(){
        this.props.onChange(this.props.name, null);
    }
	render() {
    	const style = {
    		dialogBody: {maxHeight: "380px", minHeight: "380px", display: "inline", overflowY: "visible"},
			dialog: {maxHeight: "none", height: "100%", paddingTop: "0px"},
			textField: {width: "100%"}
		};
        return (
        	<TimePicker
				cancelLabel="CANCEL"
				onChange={this.onUpdateTime}
				floatingLabelText={this.props.label}
				onDismiss={this.clearTime}
				errorText={this.props.errorText}
				errorStyle={this.props.errorStyle}
				value={this.props.value ? this.props.value.ToStandardDate() : null}
				textFieldStyle={style.textField}
				defaultTime={this.props.value || null}
				dialogStyle={style.dialog}
				dialogBodyStyle={style.dialogBody}
				autoOk />
		);
	}
}
TimePickerTool.propTypes = {
	name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.instanceOf(TimeModel),
	errorText: React.PropTypes.string,
	errorStyle: React.PropTypes.object
};

TimePickerTool.defaultProps = {
    value: null,
	errorText: null,
	errorStyle: null
};

export default TimePickerTool;
