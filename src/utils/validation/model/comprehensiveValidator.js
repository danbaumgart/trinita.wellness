import Validator from './validator';
class ComprehensiveValidator extends Validator {
	constructor(schema) {
		super(schema);
	}
	isInvalid(value) {
		const isInvalidRequired = this.isInvalidRequired(value);
		const isInvalidRestriction = this.isInvalidRestriction(value);
		const isInvalidMaximum = this.isInvalidMaximum(value);
		const isInvalidMinimum = this.isInvalidMinimum(value);
		return isInvalidRequired ||
			isInvalidRestriction ||
			isInvalidMaximum ||
			isInvalidMinimum;
	}
}
export default ComprehensiveValidator;
