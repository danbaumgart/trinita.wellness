const ErrorNames = {
    ERROR: 'Error',
    EVAL: 'EvalError',
    RANGE: 'RangeError',
    REFERENCE: 'ReferenceError',
    SYNTAX: 'SyntaxError',
    TYPE: 'TypeError',
    URI: 'URIError'
};
Object.defineProperty(ErrorNames, 'values', {
    get: () => Object.values(ErrorNames)
});
Object.freeze(ErrorNames);
export default ErrorNames;
