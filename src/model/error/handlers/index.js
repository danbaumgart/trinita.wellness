import {ErrorNames} from '../constants';
import ErrorModel from '..';
class ErrorHandler {
    static Error(errorName) {
        return new ErrorModel(errorName);
    }
    static throwError(message, data, errorName) {
        ErrorHandler.Error(errorName).throwError(message, data);
    }
    static throwTypeError(message, data) {
        ErrorHandler.throwError(message, data, ErrorNames.TYPE);
    }
    static throwReferenceError(message, data) {
        ErrorHandler.throwError(message, data, ErrorNames.REFERENCE);
    }
    static throwSyntaxError(message, data) {
        ErrorHandler.throwError(message, data, ErrorNames.SYNTAX);
    }
    static throwRangeError(message, data) {
        ErrorHandler.throwError(message, data, ErrorNames.RANGE);
    }
    static throwURIError(message, data) {
        ErrorHandler.throwError(message, data, ErrorNames.URI);
    }
    static throwEvalError(message, data) {
        ErrorHandler.throwError(message, data, ErrorNames.EVAL);
    }
}
export default ErrorHandler;
