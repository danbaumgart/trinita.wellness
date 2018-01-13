import ErrorModel from '..';
class ErrorHandler {
    static Error(errorName, message) {
        return new ErrorModel(errorName, message);
    }
    static throwError(message, data, errorName) {
        const errorMessage = ErrorModel.buildMessage(message, data, new Date());
        return new ErrorModel(errorName, errorMessage).throwError(data);
    }
}

export default ErrorHandler;
