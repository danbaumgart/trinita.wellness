import {SchemaTypes, SchemaAttributes, SchemaPatterns, SchemaLimits} from './constants';
import Limit from './limit';
import Model from '..';
const Type = {
    isNumber(value) {
        return typeof value === 'number';
    },
    isInteger(value) {
        if(Type.isNumber(value)) return value % 1 === 0;
        else if(Type.isString(value)) return SchemaPatterns.NUMERIC;
    },
    isArray(value) {
        return Array.isArray(value);
    },
    isBoolean(value) {
        return typeof value === 'boolean';
    },
    isString(value) {
        return typeof value === "string";
    }
};
class SchemaModel extends Model {
    constructor(type, required) {
        super();
        if(type && !SchemaTypes.values.includes(type)) throw new Error(`INVALID TYPE: ${type}`);
        this.type = type || SchemaTypes.TEXT;
        this.required = required === true;
    }
}
class ValidationModel extends SchemaModel {
	constructor(type, required, limit, ...patterns) {
		super(type, required === true);
		if(Limit.isInstance(limit)) {
		    if([SchemaTypes.NUMBER, SchemaTypes.INTEGER].includes(type)) this.value = new Limit(limit);
		    else this.length = new Limit(limit);
        }
		if(Array.isArray(patterns) && patterns.length > 0 && !ValidationModel.AreValidPatterns(patterns))
			throw new Error(`INVALID PATTERN: ${JSON.stringify(patterns)}.`);
		this.patterns = patterns || [];
	}
    static AreValidPatterns(patterns) {
        return patterns.every(pattern => {
            if(!['string', 'object'].includes(typeof pattern)) return false;
            else if(typeof pattern === 'string') return SchemaPatterns.values.includes(pattern);
            else if(typeof pattern === 'object') {
            	const keys = Object.keys(pattern);
                const allKeysValid = keys.length > 0 && keys.every(key => SchemaPatterns.values.includes(key));
                const allValuesLimits = Object.values(pattern).every(Limit.isInstance);
                return allKeysValid && allValuesLimits;
            }
        });
    }
}
export default ValidationModel;

