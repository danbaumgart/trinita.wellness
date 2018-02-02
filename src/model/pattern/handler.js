import {Model} from '../base';
import {CriterionModel, PatternModel} from '.';
class PatternHandler extends Model {
    constructor(patternName) {
        super();
        if(patternName && CriteriaModel.patterns.keys.includes(patternName.toLowerCase()))
        this.name = PatternHandler.getName(patternName);
        if(!this.isValid) PatternHandler.throwError({patternName});
    }
    get type() {
        return PatternHandler.getType(this.name);
    }
    get wrappedRegularExpression() {
        let value = this.value;
        if(this.type === PatternHandler.Types.CRITERIA) value += '+';
        return PatternHandler.WrappedRegularExpression(value);
    }
    get isValid() {
        return PatternHandler.isValid(this.name);
    }
    static getName(name) {
        return name && PatternHandler.Names.values.find(value => value.toLowerCase() === name.toLowerCase()) || null;
    }
    static getValue(name) {
        switch(this.getType(name)) {
            case this.Types.PATTERN:
                return this.Format[this.getName(name)];
            case this.Types.CRITERIA:
                return this.Criteria[this.getName(name)];
            default:
                return '';
        }
    }
    static getType(name) {
        if(this.isCriteriaType(name)) return this.Types.Criteria;
        else if(this.isFormatType(name)) return this.Types.Pattern;
        return null;
    }
    static isFormatType(name) {
        return name && this.Format.keys.includes(this.getName(name));
    }
    static isCriteriaType(name) {
        return name && CriteriaModel.patterns.keys.includes(name);
    }
    static isValid(pattern) {
        return super.isValid(pattern) || Boolean(this.getValue(this.getName(pattern)));
    }
}
PatternHandler.Types = {
    PATTERN: 'PATTERN',
    CRITERIA: 'CRITERIA'
};
PatternHandler.TypeHandler = {
    [this.PATTERN]: PatternModel,
    [this.CRITERIA]: CriteriaModel
};
PatternHandler.Names = {
    DATE: 'date',
    EMAIL: 'email',
    TIME: 'time',
    PHONE: 'phone',
    INTEGER: 'integer',
    ALPHA: 'alpha',
    ALPHANUMERIC: 'alphanumeric',
    LOWERCASE: 'lowercase',
    NUMERIC: 'numeric',
    SPECIAL: 'special',
    UPPERCASE: 'uppercase'
};
Object.defineProperty(PatternHandler.Names, 'values', {
    get: () => Object.values(PatternHandler.Names)
});
Object.defineProperty(PatternHandler.Types, 'values', {
    get: () => Object.values(PatternHandler.Types)
});
PatternHandler.Format = {
    [this.Names.DATE]: PatternModel.patterns.date,
    [this.Names.PHONE]: PatternModel.patterns.phone,
    [this.Names.TIME]: PatternModel.patterns.time
};
PatternHandler.Criteria = {
    [this.Names.ALPHA]: CriteriaModel.patterns.alpha,
    [this.Names.ALPHANUMERIC]: CriteriaModel.patterns.alphanumeric,
    [this.Names.EMAIL]: CriteriaModel.patterns.email,
    [this.Names.INTEGER]: CriteriaModel.patterns.numeric,
    [this.Names.LOWERCASE]: CriteriaModel.patterns.lowercase,
    [this.Names.NUMERIC]: CriteriaModel.patterns.numeric,
    [this.Names.SPECIAL]: CriteriaModel.patterns.special,
    [this.Names.UPPERCASE]: CriteriaModel.patterns.uppercase
};
Object.defineProperty(PatternHandler.Criteria, 'keys', {
    get: () => Object.keys(PatternHandler.Criteria)
});
Object.defineProperty(PatternHandler.Format, 'keys', {
    get: () => Object.keys(PatternHandler.Format)
});
Object.freeze(PatternHandler.Names);
Object.freeze(PatternHandler.Types);
Object.freeze(PatternHandler.Format);
Object.freeze(PatternHandler.Criteria);
export default PatternHandler;
