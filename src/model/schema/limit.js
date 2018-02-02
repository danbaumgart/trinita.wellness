import {SchemaPatterns, SchemaLimits} from './constants';
import {Model} from '../base';
import {Validate} from '../utils/validation';
class Limit extends Model {
    constructor(minimum, maximum) {
        super();
        if(Limit.isValidMaximum(maximum)) this.maximum = maximum;
        if(Limit.isValidMinimum(minimum)) this.minimum = minimum;
        if(!this.isValid) Limit.throwTypeError({minimum, maximum});
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
    static isValid(limit) {
        return limit && (super.isValid(limit) ||
            limit.hasOwnProperty(Limit.Properties.MINIMUM) && Limit.isValidMinimum(limit[Limit.Properties.MINIMUM]) ||
            limit.hasOwnProperty(Limit.Properties.MAXIMUM) && Limit.isValidMaximum(limit[Limit.Properties.MAXIMUM])
        );
    }
	static get TYPE_ERROR_MESSAGE() {
        return 'A minimum and/or maximum value is required.';
    }
}
Limit.Properties = {
    MINIMUM: 'minimum',
    MAXIMUM: 'maximum'
};
Object.defineProperty(Limit.Properties, 'values', {
    get: () => Object.values(Limit.Properties)
});
Object.freeze(Limit.Properties);
export default Limit;