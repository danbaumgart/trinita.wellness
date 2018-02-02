import Constraints from './constraints';
import Types from './types';

const CriteriaProperties = {
    LENGTH: 'length',
    VALUE: 'value',
    ALPHA: 'alpha',
    NUMERIC: 'numeric',
    ALPHANUMERIC: 'alphanumeric',
    SPECIAL: 'special',
    UPPERCASE: 'uppercase',
    LOWERCASE: 'lowercase'
};
Object.assign(CriteriaProperties, Types);
Object.defineProperty(CriteriaProperties, 'REQUIRED', {
    get: () => Constraints.REQUIRED
});
Object.freeze(CriteriaProperties);
export default CriteriaProperties;
