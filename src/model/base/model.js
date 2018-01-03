import ErrorHandler from '../error/handlers';
class Model extends ErrorHandler {
    get isValid() {
        return Model.isValid(this);
    }
    static get TYPE_ERROR_MESSAGE() {
        return `${this.name}: Invalid arguments.`;
    }
    static isValid(model) {
        return this.isInstance(model);
    }
    static isInstance(model) {
        return model instanceof this;
    }
    static throwTypeError(data) {
        this.throwError(this.TYPE_ERROR_MESSAGE, data, this.ErrorNames.TYPE);
    }
}
export default Model;
