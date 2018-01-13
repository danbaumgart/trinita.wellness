import {Model} from '..';
import Pattern from './model';
class PatternHandler extends Model {
    constructor(patternName) {
        super();
        this.name = PatternHandler.getName(patternName);
        if(!this.valid) PatternHandler.throwError({patternName});
    }
    get type() {
        return PatternHandler.getType(this.name);
    }
    get value() {
        return PatternHandler.getValue(this.name);
    }
    get valid() {
        return PatternHandler.isValid(this.name);
    }
    static getName(name) {
        return name && PatternHandler.Names.values.find(value => value.toLowerCase() === name.toLowerCase()) || null;
    }
    static getValue(name) {
        switch(this.getType(name)) {
            case this.Types.FORMAT:
                return this.Format[this.getName(name)];
            case this.Types.CRITERIA:
                return this.Criteria[this.getName(name)];
            default:
                return null;
        }
    }
    static getType(name) {
        if(this.isCriteriaType(name)) return this.Types.CRITERIA;
        else if(this.isFormatType(name)) return this.Types.FORMAT;
        return null;
    }
    static isFormatType(name) {
        return name && this.Format.keys.includes(this.getName(name));
    }
    static isCriteriaType(name) {
        return name && this.Criteria.keys.includes(this.getName(name));
    }
    static isValid(pattern) {
        return super.isValid(pattern) || Boolean(this.getValue(this.getType(this.getName(pattern))));
    }
}
PatternHandler.Types = {
    FORMAT: 'FORMAT',
    CRITERIA: 'CRITERIA'
};
PatternHandler.Names = {
    DATE: 'DATE',
    EMAIL: 'EMAIL',
    TIME: 'TIME',
    PHONE: 'PHONE',
    INTEGER: 'INTEGER',
    ALPHA: 'ALPHA',
    ALPHANUMERIC: 'ALPHANUMERIC',
    LOWERCASE: 'LOWERCASE',
    NUMERIC: 'NUMERIC',
    SPECIAL: 'SPECIAL',
    UPPERCASE: 'UPPERCASE'
};
Object.defineProperty(PatternHandler.Names, 'values', {
    get: () => Object.values(PatternHandler.Names)
});
Object.defineProperty(PatternHandler.Types, 'values', {
    get: () => Object.values(PatternHandler.Types)
});
PatternHandler.Format = {
    [this.Names.DATE]: Pattern.patterns.date,
    [this.Names.PHONE]: Pattern.patterns.phone,
    [this.Names.TIME]: Pattern.patterns.time
};
PatternHandler.Criteria = {
    [this.Names.ALPHA]: Pattern.patterns.alpha,
    [this.Names.ALPHANUMERIC]: Pattern.patterns.alphanumeric,
    [this.Names.EMAIL]: Pattern.patterns.email,
    [this.Names.INTEGER]: Pattern.patterns.numeric,
    [this.Names.LOWERCASE]: Pattern.patterns.lowercase,
    [this.Names.NUMERIC]: Pattern.patterns.numeric,
    [this.Names.SPECIAL]: Pattern.patterns.special,
    [this.Names.UPPERCASE]: Pattern.patterns.uppercase
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
