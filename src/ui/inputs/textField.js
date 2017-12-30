import React from '../../utils/react';
import TextField from 'material-ui/TextField';
import TypeAttributes from '../constants/attributes/types';
class _TextField extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onUpdateText = this.onUpdateText.bind(this);
    }
    onUpdateText({target:{value}}) {
        this.props.onChange(this.props.name, value);
    }
    render() {
        return this.props.multiLine && (
            <TextField
                multiLine
                fullWidth
                rows={this.props.rows}
                rowsMax={this.props.rowsMax}
                value={this.props.value}
                floatingLabelText={this.props.label}
                errorText={this.props.errorText}
                errorStyle={this.props.errorStyle}
                onChange={this.onUpdateText} />
        ) || (
            <TextField
                fullWidth
                value={this.props.value}
                floatingLabelText={this.props.label}
                errorText={this.props.errorText}
                errorStyle={this.props.errorStyle}
                onChange={this.onUpdateText} />
        );
    }
}
_TextField.propTypes = {
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string,
    errorText: React.PropTypes.any,
	errorStyle: React.PropTypes.object,
    type: React.PropTypes.oneOf(TypeAttributes.values),
    multiLine: React.PropTypes.bool,
    rows: React.PropTypes.number,
	rowsMax: React.PropTypes.number
};

_TextField.defaultProps = {
    value: '',
    errorText: null,
    errorStyle: null,
    type: TypeAttributes.TEXT,
    multiLine: false,
    rows: 3,
    rowsMax: 5
};

export default _TextField;
