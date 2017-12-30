import Handler from './error/handlers';
export class Model extends Handler {
    static isInstance(model) {
        return model instanceof this;
    }
}
export const ErrorHandler = Handler;
export default Model;
