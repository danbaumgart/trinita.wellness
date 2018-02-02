import PatternModel from '../pattern';
//import Criteria from './constants/criteria';
const Criteria = {
    Alpha: `[A-Za-z]`,
    Alphanumeric: `[^_\\W\\s}]`,
    Lowercase: `[a-z]`,
    Numeric: `[\\d]`,
    Special: `[^\\w\\s]|[_]`,
    Uppercase: `[A-Z]`
};
Object.defineProperties(Criteria, {
    'keys': {get: () => Object.keys(Criteria)},
    'values': {get: () => Object.values(Criteria)}
});
Object.freeze(Criteria);
class CriterionModel extends PatternModel {
    constructor(pattern) {
        super(pattern);
    }
    get wrappedRegularExpression() {
        return CriterionModel.WrappedRegularExpression(`${this.value}+`);
    }
    static get Patterns() {
        return Criteria;
    }
}
export default CriterionModel;