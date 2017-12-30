import {SchemaPatterns, SchemaLimits} from './constants';
import Model from '..';
class Limit extends Model {
    constructor(minimum, maximum) {
        super();
        if(!Limit.isValidLimit({minimum, maximum})) Limit.throwTypeError('A minimum and/or maximum is required.', {minimum, maximum});
        if(maximum || maximum === 0) this.maximum = maximum;
        if(minimum) this.minimum = minimum;
    }
    static Minimum(minimum) {
    	return new Limit(minimum, null);
	}
	static Maximum(maximum) {
    	return new Limit(null, maximum);
	}
	static Pattern(pattern, minimum, maximum) {
        return SchemaPatterns.values.includes(pattern) && {[pattern]: new Limit(minimum, maximum)} || null;
    }
    static isValidLimit(limit) {
        const isInvalidObject = !(limit && typeof limit === 'object');
		const hasValidArguments = !isInvalidObject && Object.keys(limit).length &&
            Object.keys(limit).every(key => SchemaLimits.values.includes(key));
    	if(isInvalidObject || !hasValidArguments) return false;
    	return Object.values(limit).every(value => value && typeof value === 'number' && value % 1 === 0 || value === 0);
    }
}
export default Limit;