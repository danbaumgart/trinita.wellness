import {RegularExpression} from '../../../../utils';
import Names from '../../constants/names';
const Criteria = {
    [Names.ALPHA]: RegularExpression.Patterns.Alpha,
    [Names.ALPHANUMERIC]: RegularExpression.Patterns.Alphanumeric,
    [Names.LOWERCASE]: RegularExpression.Patterns.Lowercase,
    [Names.NUMERIC]: RegularExpression.Patterns.Numeric,
    [Names.SPECIAL]: RegularExpression.Patterns.Special,
    [Names.UPPERCASE]: RegularExpression.Patterns.Uppercase
};
Object.defineProperties(Criteria, {
    'keys': {get: () => Object.keys(Criteria)},
    'values': {get: () => Object.values(Criteria)}
});
Object.freeze(Criteria);
export default Criteria;