import {Model} from '../base';
import {Validate} from '../schema/handlers/validation';
import Limit from '../schema/limit';
import Schema from '../schema/model';
class Validation extends Model {
    constructor(schema, value) {
        super();
        if(!Schema.isInstance(schema)) Validation.throwTypeError({schema});
        this.schema = schema;
        this.value = value;
    }
    get required() {
        return this.schema.hasOwnProperty(Schema.Properties.REQUIRED) && this.schema.required === true;
    }
    get type() {
        return this.schema.hasOwnProperty(Schema.Properties.TYPE) && this.schema.type;
    }
    get hasMinimumPattern() {
        return this.schema.hasOwnProperty(Schema.Properties.PATTERN) && Object.values(this.schema.pattern).some(Validation.hasMinimum);
    }
    get maximumPatterns() {
        return this.hasMaximumPattern && Object.keys(this.schema.pattern)
            .filter(name => Validation.hasMaximum(this.schema.pattern[name]))
            .map(patternKey => ({[patternKey]: this.schema.pattern[patternKey].maximum})) || [];
    }
    get minimumPatterns() {
        return this.hasMinimumPattern && Object.keys(this.schema.pattern)
            .filter(name => Validation.hasMinimum(this.schema.pattern[name]))
            .map(patternKey => ({[patternKey]: this.schema.pattern[patternKey].minimum})) || [];
    }
    get hasMaximumPattern() {
        return this.schema.hasOwnProperty(Schema.Properties.PATTERN) && Object.values(this.schema.pattern).some(Validation.hasMaximum);
    }
    get hasFormat() {
        return this.schema.hasOwnProperty(Schema.Properties.PATTERN) &&
            Object.values(this.schema.pattern).some(Validate.typeOfBoolean);
    }
    get format() {
        return this.hasFormat && Object.keys(this.schema.pattern).filter(pattern => this.schema.pattern[pattern] === true);
    }
    get LIMIT() {
        return this.schema.numeric ? Validation.VALUE : Validation.LENGTH;
    }
    get minimum() {
        const minimumRequirements = this.schema.hasOwnProperty(Schema.Properties.MINIMUM) && {[this.LIMIT]: this.schema.minimum};
        if(this.hasMinimumPattern) Object.assign(minimumRequirements, ...this.minimumPatterns);
        return minimumRequirements;
    }
    get maximum() {
        const maximumRequirements = this.schema.hasOwnProperty(Schema.Properties.MAXIMUM) && {[this.LIMIT]: this.schema.maximum};
        if(this.hasMinimumPattern) Object.assign(maximumRequirements, ...this.maximumPatterns);
        return maximumRequirements;
    }
    typeError() {
        return this.type && Validate.TypeHandler[this.type](this.value);
    }
    requiredError() {
        return !this.required ||
            this.type === Schema.Types.ARRAY && Validate.typeOfArray(this.value) && this.value.length > 0 ||
            Boolean(this.value);
    }
    isValidMaximum() {
        return !this.maximum || this.schema.numeric ?
            Validate.maximumValue(this.value, this.maximum) :
            Validate.maximumLength(this.value, this.maximum);
    }
    isValidMinimum() {
        return !this.minimum || this.schema.numeric ?
            Validate.minimumValue(this.value, this.minimum) :
            Validate.minimumLength(this.value, this.minimum);
    }
    get errors() {
        const errors = [];
        if(this.isRequired && Validate.required(this.value)) errors.push(Schema.REQUIRED);
    }
    static isValid(schema, values) {
    }
    static hasMinimum(limit) {
        return Limit.isValid(limit) && Limit.isValidMinimum(limit.minimum);
    }
    static hasMaximum(limit) {
        return Limit.isValid(limit) && Limit.isValidMinimum(limit.maximum);
    }
    static get LENGTH() {
        return "length";
    }
    static get VALUE() {
        return "value";
    }
}

export default Validation;