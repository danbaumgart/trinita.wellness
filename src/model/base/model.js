import ErrorModel from '../error';
class Model {
    get isValid() {
        return Model.isValid(this);
    }
    static get errorMessage() {
        return `${this[Model.NAME]}: Invalid arguments.`;
    }
    static isValid(model) {
        return this.isInstance(model);
    }
    static get NAME() {
        return "name";
    }
    static isInstance(model) {
        return model instanceof this;
    }
    static Error(errorName, message) {
        return new ErrorModel(errorName, message);
    }
    static throwError(data, errorName = ErrorModel.Names.TYPE) {
        const errorMessage = ErrorModel.buildMessage(this.errorMessage, data, new Date());
        const name = ErrorModel.Names.values.includes(errorName) && errorName || ErrorModel.Names.DEFAULT;
        return this.Error(name, errorMessage).throwError(data);
    }
}
export default Model;
