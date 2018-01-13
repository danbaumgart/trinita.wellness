import {SchemaTypes, SchemaAttributes, SchemaPatterns, SchemaLimits} from './constants';
import Limit from './limit';
import {Validate} from '../schema/handlers/validation';
import {Model} from '../base';
class Schema extends Model {
    constructor(type, required, minimum, maximum, ...patterns) {
        super();
        this.type = Schema.getType(type);
        this.required = required === true;
        if(Schema.isValidMinimum(minimum)) this.minimum = minimum;
        if(Schema.isValidMaximum(maximum)) this.maximum = maximum;
        if(Schema.areValidPatterns(patterns)) this.pattern = Schema.reducePatterns(patterns);
    }
    get numeric() {
        return Schema.isNumeric(this.type);
    }
    static reducePatterns(patterns) {
        return patterns.reduce(Schema.PatternReducer, {});
    }
    static get PatternReducer() {
        return (restrictions, pattern) => {
            if(Schema.isPatternRestriction(pattern)) restrictions[pattern] = true;
            else if(Schema.isPatternObject(pattern)) Object.keys(pattern).forEach(key => restrictions[key] = pattern[key]);
            return restrictions;
        };
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
    static isNumeric(schemaType) {
        return Schema.NumericTypes.includes(schemaType);
    }
    static isPatternRestriction(pattern) {
        return Validate.typeOfString(pattern) && SchemaPatterns.values.includes(pattern);
    }
    static isPatternObject(pattern) {
        return Object.keys(pattern).every(key => SchemaPatterns.values.includes(key)) &&
            Object.values(pattern).every(value => Limit.isValid(value) || Validate.typeOfBoolean(value));
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
        if(Validate.typeOfString('string')) return Schema.isValidPatternType(pattern);
        else if(Validate.typeOfObject('object')) {
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
Schema.Properties = {
    TYPE: 'type',
    REQUIRED: 'required',
    MINIMUM: 'minimum',
    MAXIMUM: 'maximum',
    PATTERN: 'pattern'
};
Object.defineProperty(Schema.Properties, 'values', {
    get: () => Object.values(Schema.Properties)
});
Object.freeze(Schema.Properties);
Schema.Patterns = {
    ALPHA: 'ALPHA',
    NUMERIC: 'NUMERIC',
    ALPHANUMERIC: 'ALPHANUMERIC',
    SPECIAL: 'SPECIAL',
    UPPERCASE: 'UPPERCASE',
    LOWERCASE: 'LOWERCASE'
};
Object.defineProperty(Schema.Patterns, 'values', {
    get: () => Object.values(Schema.Patterns)
});
Object.freeze(Schema.Types);
Schema.Types = {
    TEXT: 'text',
    PASSWORD: 'password',
    BOOLEAN: 'boolean',
    PHONE: 'phone',
    EMAIL: 'email',
    DATE: 'date',
    TIME: 'time',
    INTEGER: 'integer',
    NUMBER: 'number',
    ARRAY: 'array'
};
Object.defineProperty(Schema.Types, 'values', {
    get: () => Object.values(Schema.Types)
});
Object.freeze(Schema.Patterns);
export default Schema;

