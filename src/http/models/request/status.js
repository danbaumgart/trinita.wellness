import StatusHandler from '../../handlers/status';
class RequestStatus {
    constructor(status) {
        this.code = status;
        this.type = StatusHandler.getStatusClass(status);
        this.status = StatusHandler.getStatusDescription(status);
    }
}
export default RequestStatus;
