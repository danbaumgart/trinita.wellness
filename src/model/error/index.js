import ErrorTypes from './handlers/types';
import {ErrorNames} from './constants';
import {LogModel} from '../base';
class ErrorModel extends LogModel {
    constructor(name, message) {
        super();
        this.name = ErrorNames.values.includes(name) ? name : ErrorNames.ERROR;
        this.message = message || `Invalid ${name}`;
    }
    throwError(data) {
        throw this.Error(data);
    }
    buildMessage(data) {
        return ErrorModel.buildMessage(this.message, data, this.timestamp);
    }
    Error(data) {
        return ErrorModel.Error(this.buildMessage(data), this.name);
    }
    static Error(message, name) {
        if(name && ErrorTypes.keys.includes(name))
            return new ErrorTypes[name](message);
        return new Error(message);
    }
    static stringifyData(data) {
        return JSON.stringify(data)
            .replace(new RegExp(',', 'g'), ', ')
            .replace(new RegExp(':', 'g'), ': ');
    }
    static buildMessage(message, data, timestamp) {
        return !data ? message : [
            `${this.name}: ${message}. ${timestamp}`,
            `   ${ErrorModel.stringifyData(data)}`
        ].join('\n');
    }
}
export default ErrorModel;
