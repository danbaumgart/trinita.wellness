import {SchemaTypes, SchemaAttributes, SchemaPatterns, SchemaLimits} from './constants';
import Limit from './limit';
import {Validate} from '../schema/handlers/validation';
import {Model} from '..';
class Schema extends Model {
    constructor(type, required, minimum, maximum, ...patterns) {
        super();
        this.type = Schema.getSchemaType(type);
        this.required = required === true;
        if(Schema.isValidMinimum(minimum)) this.minimum = minimum;
        if(Schema.isValidMaximum(maximum)) this.maximum = maximum;
        if(Schema.areValidPatterns(patterns)) this.patterns = patterns;
    }
    get isNumericType() {
        return Schema.numericTypes.includes(this.type);
    }
    static get MINIMUM() {
        return SchemaAttributes.MINIMUM;
    }
    static get MAXIMUM() {
        return SchemaAttributes.MAXIMUM;
    }
    static get REQUIRED() {
        return SchemaAttributes.REQUIRED;
    }
    static get TYPE() {
        return SchemaAttributes.TYPE;
    }
    static get PATTERN() {
        return SchemaAttributes.PATTERN;
    }
    static get numericTypes() {
        return [SchemaTypes.NUMBER, SchemaTypes.INTEGER];
    }
    static get stringTypes() {
        return SchemaTypes.values.filter(type => !Schema.numericTypes.includes(type));
    }
    static get TYPE_ERROR_MESSAGE() {
        return `Must be one of: ${JSON.stringify(SchemaTypes.values)}`;
    }
    static isValidMinimum(minimum) {
        return Validate.typeOfInteger(minimum) && minimum >= 1;
    }
    static isValidMaximum(maximum) {
        return Validate.typeOfInteger(maximum) && maximum >= 0;
    }
    static isValidPattern(pattern) {
        if(typeof pattern === 'string') return SchemaPatterns.values.includes(pattern);
        else if(typeof pattern === 'object') {
            const keys = Object.keys(pattern);
            const allKeysValid = keys.length > 0 && keys.every(key => SchemaPatterns.values.includes(key));
            const allValuesLimits = Object.values(pattern).every(Limit.isInstance);
            return allKeysValid && allValuesLimits;
        } return false;
    }
    static areValidPatterns(patterns) {
        return Array.isArray(patterns) && patterns.length > 0 && patterns.every(Schema.isValidPattern);
    }
    static getSchemaType(type) {
        if(SchemaTypes.values.includes(type)) return type;
        Schema.throwTypeError(Schema.TYPE_ERROR_MESSAGE, {type});
    }
}
class ValidationModel extends Schema {
	constructor(type, required, limit, ...patterns) {
		super(type, required === true, );
		if(Limit.isInstance(limit)) {
		    if([SchemaTypes.NUMBER, SchemaTypes.INTEGER].includes(type)) this.value = new Limit(limit);
		    else this.length = new Limit(limit);
        }
	}
}
export default ValidationModel;

