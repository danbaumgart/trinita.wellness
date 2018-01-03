import {SchemaPatterns, SchemaLimits} from './constants';
import Model from '../base';
import {Validate} from './handlers/validation';
class Limit extends Model {
    constructor(minimum, maximum) {
        super();
        if(Limit.isValidMaximum(maximum)) this.maximum = maximum;
        if(Limit.isValidMinimum(minimum)) this.minimum = minimum;
        if(!this.isValid) Limit.throwTypeError({minimum, maximum});
    }
    static isValid(limit) {
        return limit.hasOwnProperty(Limit.MINIMUM) && Limit.isValidMinimum(limit.minimum) ||
            limit.hasOwnProperty(Limit.MAXIMUM) && Limit.isValidMaximum(limit.maximum);
    }
    static get MINIMUM() {
        return "minimum";
    }
    static get MAXIMUM() {
        return "maximum";
    }
    static Minimum(minimum) {
        if(Limit.isValidMinimum(minimum)) return new Limit(minimum, null);
	}
	static Maximum(maximum) {
    	if(Limit.isValidMaximum(maximum)) return new Limit(null, maximum);
	}
    static isValidMinimum(minimum) {
        return Validate.typeOfInteger(minimum) && minimum >= 1;
    }
    static isValidMaximum(maximum) {
        return Validate.typeOfInteger(maximum) && maximum >= 0;
    }
    static Pattern(pattern, minimum, maximum) {
        return SchemaPatterns.values.includes(pattern) && {[pattern]: new Limit(minimum, maximum)} || null;
    }
	static get TYPE_ERROR_MESSAGE() {
        return 'A minimum and/or maximum value is required.';
    }
    static isValidLimit(limit) {
        const hasValidMinimum = limit.hasOwnProperty(Limit.MINIMUM) && Limit.isValidMinimum(limit.minimum);
        const hasValidMaximum = limit.hasOwnProperty(Limit.MAXIMUM) && Limit.isValidMaximum(limit.maximum);
        return hasValidMinimum || hasValidMaximum;
    }
}
export default Limit;