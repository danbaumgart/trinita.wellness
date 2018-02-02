import {RegularExpression} from '../../../utils';
import Names from '../constants/names';
const Patterns = {
    [Names.DATE]: RegularExpression.Patterns.Date,
    [Names.EMAIL]: RegularExpression.Patterns.Email,
    [Names.TIME]: RegularExpression.Patterns.Time,
    [Names.PHONE]: RegularExpression.Patterns.Phone
};
Object.defineProperties(Patterns, {
    'keys': {get: () => Object.keys(Patterns)},
    'values': {get: () => Object.values(Patterns)}
});
Object.freeze(Patterns);
export default Patterns;