import {Model} from '..';
import {RegExp} from '../../utils';
class PatternModel extends Model {
    constructor(pattern) {
        super();
        this.value = pattern;
    }
    get regularExpression() {
        return PatternModel.RegularExpression(this.value);
    }
    get wrappedRegularExpression() {
        return PatternModel.WrappedRegularExpression(this.value);
    }
    getMatchingInstances(inputValue) {
        return PatternModel.getMatchingInstances(this.value, inputValue);
    }

    testInputValue(inputValue) {
        return PatternModel.testInputValue(this.value, inputValue);
    }

    static RegularExpression(patternValue) {
        return new RegExp(patternValue, RegExp.Arguments.GlobalMatch);
    }

    static WrappedRegularExpression(patternValue) {
        return new RegExp(`^${patternValue}$`, RegExp.Arguments.GlobalMatch);
    }

    static getMatchingInstances(patternValue, inputValue) {
        return inputValue.match(PatternModel.RegularExpression(patternValue)) || [];
    }

    static testInputValue(patternValue, inputValue) {
        return PatternModel.WrappedRegularExpression(patternValue).test(inputValue);
    }
}
PatternModel.patterns = {
    date: `(0?\\d|1[0-2])\\/(0?\\d|1\\d|2\\d|3[01])\\/(19|20)\\d{2}`,
    email: `([\\w.-]+[^\\W}])(@[\\w.-]+)(\\.[^\\W_]+)`,
    time: `(0?[1-9]|1[0-2])(\\s?:\\s?)([0-5]\\d)(\\s?[pPaA][mM])`,
    phone: `(\\d-)?[(]\\d{3}[)]\\d{3}-\\d{4}`,
    integer: `[\\d]+`,
    alpha: `[A-Za-z]`,
    alphanumeric: `[^_\\W\\s}]`,
    lowercase: `[a-z]`,
    numeric: `[\\d]`,
    special: `[^\\w\\s]|[_]`,
    uppercase: `[A-Z]`
};
Object.defineProperties(PatternModel.patterns, {
    'keys': {get: () => Object.keys(PatternModel.patterns)},
    'values': {get: () => Object.values(PatternModel.patterns)}
});
Object.freeze(PatternModel.patterns);
export default PatternModel;