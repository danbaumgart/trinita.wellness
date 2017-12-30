import {LogTypes, ErrorCategories} from './constants';
class ErrorLog extends Error {
    constructor(category, data, message) {
        super(ErrorLog.getMessage(category, data, message));
    }
    static getMessage(category, data, message) {
        return `INVALID ${category}: ${JSON.stringify(data)}. ${message}`;
    }
}
class Logger {
    constructor(type, category, data, message) {
        this.type = LogTypes.values.includes(type) ? type : LogTypes.LOG;
        this.category = category;
        this.message = `${category}: ${data}. ${message}`;
        this.data = data;
        this.timestamp = new Date();
        Logger.Output({type, category, data, message});
    }
    static Output(entry) {
        switch(entry.type) {
            case LogTypes.WARN:
                console.warn(entry);
                break;
            case LogTypes.ERROR:
                console.error(entry);
                break;
            default:
                console.log(entry);
                break;
        }
    }
    static Error(category, data, message) {
        const log = new Logger(LogTypes.ERROR, category, data, message);
        return new ErrorLog(log.category, log.data, log.message);
    }
    static Warn(category, data, message) {
        return new Logger(LogTypes.WARNING, category, data, message);
    }
    static Entry(category, data, message) {
        new Logger(LogTypes.LOG, category, data, message);
    }
}
export default Logger;
