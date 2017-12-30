import ErrorTypes from './handlers/types';
import {ErrorNames} from './constants';
class ErrorModel {
    constructor(name) {
        this.name = ErrorNames.values.includes(name) ? name : ErrorNames.ERROR;
        this.timestamp = new Date();
    }
    static GetError(message, name) {
        if(name && ErrorTypes.keys.includes(name))
            return new ErrorTypes[name](message);
        return new Error(message);
    }
    static StringifyData(data) {
        return JSON.stringify(data)
            .replace(new RegExp(',', 'g'), ', ')
            .replace(new RegExp(':', 'g'), ': ');
    }
    static BuildMessage(message, data, timestamp = new Date()) {
        return !data ? message : [
            `${message}. ${timestamp}`,
            `   ${ErrorModel.StringifyData(data)}`
        ].join('\n');
    }
    throwError(message, data) {
        const errorMessage = ErrorModel.BuildMessage(message, data, this.timestamp);
        throw ErrorModel.GetError(errorMessage, this.name);
    }
}
export default ErrorModel;
