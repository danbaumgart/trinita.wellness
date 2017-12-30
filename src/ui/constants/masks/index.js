import Patterns from '../../../utils/regexp/patterns';
const Masks = {
	AREA_CODE: '(999)999-9999',
	COUNTRY_CODE: '9-(999)999-9999'
};
Object.defineProperty(Masks, 'values', {
	get: () => Object.values(Masks)
});
Object.defineProperty(Masks, 'pattern', {
	get: () => ({
		[Masks.AREA_CODE]: new RegExp(Patterns.TELEPHONE_MASK, 'g'),
		[Masks.COUNTRY_CODE]: new RegExp(Patterns.TELEPHONE_MASK, 'g')
	})
});
export default Object.freeze(Masks);
