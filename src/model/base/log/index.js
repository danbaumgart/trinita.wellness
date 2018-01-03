import Identity from '../identity';
class Log extends Identity {
    constructor(id) {
        super(id);
        this.timestamp = Log.Timestamp;
    }
    static get Timestamp() {
        return new Date();
    }
}

export default Log;