import Pattern from '../pattern/model';
import {Log} from '../base';
class ErrorModel extends Log {
    constructor(name, message) {
        super();
        this.name = ErrorModel.Names.values.includes(name) ? name : ErrorModel.Names.DEFAULT;
        this.message = message || `Invalid ${name}`;
    }
    buildMessage(data) {
        return ErrorModel.buildMessage(this.message, data, this.timestamp);
    }
    Error(data) {
        return ErrorModel.Error(this.buildMessage(data), this.name);
    }
    throwError(data) {
        throw this.Error(data);
    }
    static Error(message, name) {
        return this.Errors.keys.includes(name) ?
            new this.Errors[name](message) :
            new this.Errors[this.Names.DEFAULT](message);
    }
    static stringifyData(data) {
        return JSON.stringify(data)
            .replace(Pattern.RegularExpression(','), ', ')
            .replace(Pattern.RegularExpression(':'), ': ');
    }
    static buildMessage(message, data, timestamp) {
        return !data ?
            `${this.name}: ${message}.` : [
                `${this.name}: ${message}. ${timestamp}`,
                `   ${this.stringifyData(data)}`
            ].join('\n');
    }
}
ErrorModel.Errors = {
    Error,
    EvalError,
    RangeError,
    ReferenceError,
    SyntaxError,
    TypeError,
    URIError
};
ErrorModel.Names = {
    DEFAULT: 'Error',
    EVAL: 'EvalError',
    RANGE: 'RangeError',
    REFERENCE: 'ReferenceError',
    SYNTAX: 'SyntaxError',
    TYPE: 'TypeError',
    URI: 'URIError'
};
Object.defineProperty(ErrorModel.Errors, 'keys', {
    get: () => Object.values(ErrorModel.Errors)
});
Object.defineProperty(ErrorModel.Names, 'values', {
    get: () => Object.values(ErrorModel.Names)
});
Object.freeze(ErrorModel.Errors);
Object.freeze(ErrorModel.Names);
export default ErrorModel;
