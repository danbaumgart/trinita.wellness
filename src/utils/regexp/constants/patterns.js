const Patterns = {
    Date: `(0?\\d|1[0-2])\\/(0?\\d|1\\d|2\\d|3[01])\\/(19|20)\\d{2}`,
    Email: `([\\w.-]+[^\\W}])(@[\\w.-]+)(\\.[^\\W_]+)`,
    Time: `(0?[1-9]|1[0-2])(\\s?:\\s?)([0-5]\\d)(\\s?[pPaA][mM])`,
    Phone: `(\\d-)?[(]\\d{3}[)]\\d{3}-\\d{4}`,
    Alpha: `[A-Za-z]`,
    Alphanumeric: `[^_\\W\\s}]`,
    Lowercase: `[a-z]`,
    Numeric: `[\\d]`,
    Special: `[^\\w\\s]|[_]`,
    Uppercase: `[A-Z]`
};
Object.defineProperties(Patterns, {
    'keys': {get: () => Object.keys(Patterns)},
    'values': {get: () => Object.values(Patterns)}
});
Object.freeze(Patterns);
export default Patterns;