import React from '../../utils/react';
import SelectField from 'material-ui/SelectField';
import StaticError from '../common/staticErrors';
import MenuItem from 'material-ui/MenuItem';
import StringUtils from '../../utils/string';
class _SelectField extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event, index, value) {
        this.props.onChange(this.props.name, value);
    }

    render() {
        const {name, label: _label, value, children, errors, dataSource} = this.props;
        const floatingLabelText = _label || StringUtils.fromCamelCaseToProperCase(name);
        const props = {
            name, value, floatingLabelText, children,
            fullWidth: true,
            onChange: this.onChange
        };
        if (Array.isArray(errors) && errors.length > 0)
            Object.assign(props, {errorText: <StaticError errors={errors}/>});
        const mappedDataSource = Array.isArray(dataSource) && dataSource.length > 0 ?
            dataSource.map((data, index) => <MenuItem key={data.id}
                                                      primaryText={data.name}
                                                      secondaryText={data.id}
                                                      value={data.id} />) : [];
        return (
                <SelectField floatingLabelText={floatingLabelText}
                             name={name}
                             value={value}
                             fullWidth={true}
                             onChange={this.onChange}>
                    {mappedDataSource}
                </SelectField>
        );
    }
}

_SelectField.propTypes = {
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    dataSource: React.PropTypes.array.isRequired,
    label: React.PropTypes.string,
    value: React.PropTypes.string,
    errors: React.PropTypes.arrayOf(React.PropTypes.string)
};

_SelectField.defaultProps = {
    label: null,
    value: '',
    errors: []
};
export default _SelectField;
