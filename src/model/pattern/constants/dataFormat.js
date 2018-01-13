const FormatPatterns = {
	date: `(0?\\d|1[0-2])\\/(0?\\d|1\\d|2\\d|3[01])\\/(19|20)\\d{2}`,
	emailAddress: `([\\w.-]+[^\\W}])(@[\\w.-]+)(\\.[^\\W_]+)`,
	time: `(0?[1-9]|1[0-2])(\\s?:\\s?)([0-5]\\d)(\\s?[pPaA][mM])`,
    phoneNumber: `(\\d-)?[(]\\d{3}[)]\\d{3}-\\d{4}`,
	integer: `[\\d]+`
};
Object.defineProperties(FormatPatterns, {
    'keys': {get: () => Object.keys(FormatPatterns)},
    'values': {get: () => Object.values(FormatPatterns)}
});
Object.freeze(FormatPatterns);
export default FormatPatterns;
