import Constraints from './constraints';
import Types from './types';
const Criteria = {
	LENGTH: 'length',
	VALUE: 'value',
	ALPHA: 'alpha',
	NUMERIC: 'numeric',
	ALPHANUMERIC: 'alphanumeric',
	SPECIAL: 'special',
	UPPERCASE: 'uppercase',
	LOWERCASE: 'lowercase'
};
Object.assign(Criteria, Types);
Object.defineProperty(Criteria, 'REQUIRED', {
	get: () => Constraints.REQUIRED
});
Object.freeze(Criteria);
export default Criteria;
