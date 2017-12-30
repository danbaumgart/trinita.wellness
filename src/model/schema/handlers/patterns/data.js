import {SchemaTypes} from '../../constants';
const DataPatterns = {
	[SchemaTypes.DATE]: `(0?\\d|1[0-2])\\/(0?\\d|1\\d|2\\d|3[01])\\/(19|20)\\d{2}`,
	[SchemaTypes.EMAIL]: `([\\w.-]+[^\\W}])(@[\\w.-]+)(\\.[^\\W_]+)`,
	[SchemaTypes.TIME]: `(0?[1-9]|1[0-2])(\\s?:\\s?)([0-5]\\d)(\\s?[pPaA][mM])`,
    [SchemaTypes.PHONE]: `(\\d-)?[(]\\d{3}[)]\\d{3}-\\d{4}`,
	[SchemaTypes.INTEGER]: `[\\d]+`
};
Object.defineProperties(DataPatterns, {
    'keys': {get: () => Object.keys(DataPatterns)},
    'values': {get: () => Object.values(DataPatterns)}
});
Object.freeze(DataPatterns);
export default DataPatterns;
