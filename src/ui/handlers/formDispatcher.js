import React from '../../utils/react';
import SCHEMA from '../../utils/validation/constants/schema';
import FormPaper from '../common/paper/form';
import Dispatcher from './fieldDispatcher';
const Form = ({form, schema, errors, onChange}) => (
	<FormPaper>{Object.keys(form).map(name =>
		<Dispatcher key={name}
					name={name}
					onChange={onChange}
					value={form[name]}
					errors={errors[name] || null}
					component={schema[name] && schema[name][SCHEMA.INPUT]}/>
	)}</FormPaper>
);
Form.propTypes = {
	form: React.PropTypes.object.isRequired,
	schema: React.PropTypes.object.isRequired,
	onChange: React.PropTypes.func.isRequired,
	errors: React.PropTypes.object,
	submitted: React.PropTypes.bool
};
Form.defaultProps = {
	errors: null
};
export default Form;
