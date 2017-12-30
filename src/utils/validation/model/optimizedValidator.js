import Validator from './validator';
class OptimizedValidator extends Validator {
	constructor(schema) {
		super(schema);
	}
	isInvalid(value) {
		return OptimizedValidator.hasFalseyValue(value) && !this.required ? false :
			this.isInvalidRequired(value) ||
			this.isInvalidRestriction(value) ||
			this.isInvalidMaximum(value) ||
			this.isInvalidMinimum(value);
	}
}
export default OptimizedValidator;