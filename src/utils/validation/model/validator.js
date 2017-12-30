import Constraints from '../constants/constraints';
import {MAXIMUM, MINIMUM, RESTRICT} from '../handlers/constraints';
class Validator {
	constructor(constraints) {
		this.required = constraints && constraints.hasOwnProperty(Constraints.REQUIRED) && constraints[Constraints.REQUIRED] === true;
		this.restrict = constraints && constraints.hasOwnProperty(Constraints.RESTRICT) ? constraints[Constraints.RESTRICT] : null;
		this.maximum = constraints && constraints.hasOwnProperty(Constraints.MAXIMUM) ? constraints[Constraints.MAXIMUM] : null;
		this.minimum = constraints && constraints.hasOwnProperty(Constraints.MINIMUM) ? constraints[Constraints.MINIMUM] : null;
		this.errors = [];
	}
	static hasFalseyValue(value) {
		return !value || Array.isArray(value) && value.length < 1;
	}
	isInvalidRequired(value) {
		const isInvalid = this.required && Validator.hasFalseyValue(value);
		if (isInvalid) this.errors.push(Constraints.REQUIRED);
		return isInvalid;
	}

	isInvalidRestriction(value) {
		const objectKey = this.restrict && typeof this.restrict === 'object' && Object.keys(this.restrict)[0];
		const isInvalid = objectKey && typeof RESTRICT[objectKey] === 'function' ?
			!RESTRICT[objectKey](value, this.restrict[objectKey]) :
			typeof RESTRICT[this.restrict] === 'function' && !RESTRICT[this.restrict](value);
		if (isInvalid) this.errors.push([Constraints.RESTRICT, objectKey && this.restrict[objectKey] || this.restrict].join(' '));
		return isInvalid;
	}

	isInvalidMaximum(value) {
		return this.maximum && Object.keys(this.maximum).some(criterion => {
				const isInvalid = !MAXIMUM[criterion](value, this.maximum[criterion]);
				if (isInvalid) this.errors.push([Constraints.MAXIMUM, criterion].join(' '));
				return isInvalid;
			});
	}

	isInvalidMinimum(value) {
		return this.minimum &&
			Object.keys(this.minimum).some(criterion => {
				const isInvalid = !MINIMUM[criterion](value, this.minimum[criterion]);
				if (isInvalid) this.errors.push([Constraints.MINIMUM, criterion].join(' '));
				return isInvalid;
			});
	}
}
export default Validator;
