import {ComprehensiveValidator, OptimizedValidator} from './model';
export default {
	validateField(name, value, schema, optimized = true) {
		const validation = optimized ?
			new OptimizedValidator(schema) :
			new ComprehensiveValidator(schema);
		return {[name]: validation.isInvalid(value) && validation.errors || []};
	},
	validateForm(form, schema, optimized = true) {
		const formErrors = Object.keys(form).map(name =>
			this.validateField(name, form[name], schema[name], optimized));
		return Object.assign(...formErrors);
	}
};
