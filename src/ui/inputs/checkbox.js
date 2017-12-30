import React from '../../utils/react';
import {Checkbox} from 'material-ui';
import StringUtils from '../../utils/string';
class CheckboxInput extends React.PureComponent {
	constructor(props) {
		super(props);
        this.onUpdate = this.onUpdate.bind(this);
    }
    onUpdate(event, value){
        this.props.onChange(this.props.name, value);
    }
	render() {
        const {name, label: _label, value} = this.props;
        const label = _label || StringUtils.fromCamelCaseToProperCase(name);
		return (<Checkbox name={name}
                          checked={value}
                          label={label}
                          onCheck={this.onUpdate} />);
	}
}
CheckboxInput.propTypes = {
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    label: React.PropTypes.string,
    value: React.PropTypes.bool
};

CheckboxInput.defaultProps = {
    label: null,
	value: false
};

export default CheckboxInput;
