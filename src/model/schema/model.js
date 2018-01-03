import {SchemaTypes, SchemaAttributes, SchemaPatterns, SchemaLimits} from './constants';
import Limit from './limit';
import {Validate} from '../schema/handlers/validation';
import Model from '../base';
class Schema extends Model {
    constructor(type, required, minimum, maximum, ...patterns) {
        super();
        this.type = Schema.getType(type);
        this.required = required === true;
        if(Schema.isValidMinimum(minimum)) this.minimum = minimum;
        if(Schema.isValidMaximum(maximum)) this.maximum = maximum;
        if(Schema.areValidPatterns(patterns)) this.patterns = patterns.reduce(Schema.PatternReducer, {});
    }
    get isNumeric() {
        return Schema.NumericTypes.includes(this.type);
    }
    static isPatternRestriction(pattern) {
        return Validate.typeOfString(pattern) && SchemaPatterns.values.includes(pattern);
    }
    static isPatternObject(pattern) {
        return Object.keys(pattern).every(key => SchemaPatterns.values.includes(key)) &&
            Object.values(pattern).every(value => Limit.isValidLimit(value) || Validate.typeOfBoolean(value));
    }
    static get PatternReducer() {
        return (restrictions, pattern) => {
            if(Schema.isPatternRestriction(pattern)) restrictions[pattern] = true;
            else if(Schema.isPatternObject(pattern)) Object.keys(pattern).forEach(key => restrictions[key] = pattern[key]);
            return restrictions;
        };
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
    static get NumericTypes() {
        return [SchemaTypes.NUMBER, SchemaTypes.INTEGER];
    }
    static get StringTypes() {
        return SchemaTypes.values.filter(type => !Schema.NumericTypes.includes(type));
    }
    static get TYPE_ERROR_MESSAGE() {
        return `Must be one of: ${JSON.stringify(SchemaTypes.values)}`;
    }
    static isValidPatternType(pattern) {
        return SchemaPatterns.values.includes(pattern);
    }
    static isValidMinimum(minimum) {
        return Validate.typeOfInteger(minimum) && minimum >= 1;
    }
    static isValidMaximum(maximum) {
        return Validate.typeOfInteger(maximum) && maximum >= 0;
    }
    static isValidPattern(pattern) {
        if(typeof pattern === 'string') return Schema.isValidPatternType(pattern);
        else if(typeof pattern === 'object') {
            return Object.keys(pattern).every(key => SchemaPatterns.values.includes(key)) &&
                Object.values(pattern).every(value => Limit.isInstance(value) || Validate.typeOfBoolean(value));
        } return false;
    }
    static areValidPatterns(patterns) {
        return Array.isArray(patterns) && patterns.length > 0 && patterns.every(Schema.isValidPattern);
    }
    static getType(type) {
        if(SchemaTypes.values.includes(type)) return type;
        Schema.throwTypeError(type);
    }
}
Schema.Patterns = SchemaPatterns;
Schema.Types = SchemaTypes;
export default Schema;

