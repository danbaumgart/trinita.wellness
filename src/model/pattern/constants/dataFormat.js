const DataFormatPatterns = {
	Date: `(0?\\d|1[0-2])\\/(0?\\d|1\\d|2\\d|3[01])\\/(19|20)\\d{2}`,
	EmailAddress: `([\\w.-]+[^\\W}])(@[\\w.-]+)(\\.[^\\W_]+)`,
	Time: `(0?[1-9]|1[0-2])(\\s?:\\s?)([0-5]\\d)(\\s?[pPaA][mM])`,
    PhoneNumber: `(\\d-)?[(]\\d{3}[)]\\d{3}-\\d{4}`,
	Integer: `[\\d]+`
};
Object.defineProperties(DataFormatPatterns, {
    'keys': {get: () => Object.keys(DataFormatPatterns)},
    'values': {get: () => Object.values(DataFormatPatterns)}
});
Object.freeze(DataFormatPatterns);
export default DataFormatPatterns;
