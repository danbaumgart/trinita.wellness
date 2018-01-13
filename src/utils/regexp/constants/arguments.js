const RegExpArguments = {
    GlobalMatch: 'g',
    IgnoreCase: 'i',
    Multiline: 'm',
    Unicode: 'u',
    Sticky: 'y'

};
Object.defineProperty(RegExpArguments, 'values', {
    get: () => Object.values(RegExpArguments)
});
Object.freeze(RegExpArguments);
export default RegExpArguments;