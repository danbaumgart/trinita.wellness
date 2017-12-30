import React from '../../utils/react';
import InputHandler from './inputHandler';
import {toProperCase} from '../../utils/string';
import Error from '../common/staticError';
import INPUTS from '../constants/inputs';
import Status from '../../utils/models/status/constants/types';
import StatusColors from '../../utils/models/status/handlers/colors';
import TypeAttributes from '../constants/attributes/types';
const FieldDispatcher = ({name, errors, onChange, value, type, component}) => {
	const errorText = Array.isArray(errors) && errors.length > 0 ? toProperCase(errors[0]) : null;
	const errorStyle = {position: 'absolute', right: '0px', color: StatusColors[Status.WARNING]};
	const label = toProperCase(name);
	const props = {name, onChange, value, label, type, errorText, errorStyle};
	const Handler = InputHandler[component] || null;
	return Handler ? <Handler {...props} /> : <Error message={`INVALID FIELD ${component} FOR ${name}`}/>;
};
FieldDispatcher.propTypes = {
	component: React.PropTypes.oneOf(Object.values(INPUTS)).isRequired,
	name: React.PropTypes.string.isRequired,
	onChange: React.PropTypes.func.isRequired,
	value: React.PropTypes.any,
	errors: React.PropTypes.arrayOf(React.PropTypes.string),
	type: React.PropTypes.oneOf(TypeAttributes.values)
};
FieldDispatcher.defaultProps = {
	value: null,
	errors: null,
	type: null
};
export default FieldDispatcher;
