import Patterns from "./patterns";

const RegExpArguments = {
    GlobalMatch: 'g',
    IgnoreCase: 'i',
    Multiline: 'm',
    Unicode: 'u',
    Sticky: 'y'

};
Object.defineProperties(RegExpArguments, {
    'keys': {get: () => Object.keys(RegExpArguments)},
    'values': {get: () => Object.values(RegExpArguments)}
});
Object.freeze(RegExpArguments);
export default RegExpArguments;