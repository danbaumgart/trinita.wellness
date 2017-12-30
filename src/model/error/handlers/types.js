import {ErrorNames} from '../constants';
const ErrorTypes = {
    [ErrorNames.ERROR]: Error,
    [ErrorNames.EVAL]: EvalError,
    [ErrorNames.RANGE]: RangeError,
    [ErrorNames.REFERENCE]: ReferenceError,
    [ErrorNames.SYNTAX]: SyntaxError,
    [ErrorNames.TYPE]: TypeError,
    [ErrorNames.URI]: URIError
};
Object.defineProperties(ErrorTypes, {
    'keys': {get: () => Object.keys(ErrorTypes)},
    'values': {get: () => Object.values(ErrorTypes)}
});
Object.freeze(ErrorTypes);
export default ErrorTypes;
