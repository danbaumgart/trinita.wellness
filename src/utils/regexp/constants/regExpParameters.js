const RegExpParameters = {
    GLOBAL_MATCH: 'g',
    IGNORE_CASE: 'i',
    MULTILINE: 'm',
    UNICODE: 'u',
    STICKY: 'y'
};
Object.defineProperty(RegExpParameters, 'values', {
    get: () => Object.values(RegExpParameters)
});
Object.freeze(RegExpParameters);
export default RegExpParameters;