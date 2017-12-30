import Service from './service';
import Resources from './constants/resources';
class Notifications extends Service {
    constructor() {
        super(Resources.NOTIFICATIONS);
    }
    Post(appointmentId) {
        return super.Get(`/${appointmentId}`)
            .then(Service.ResponseMapper)
            .then(response => !response ?
                super.Post(`/${appointmentId}`).then(Service.ResponseMapper) :
                response);
    }
}
export default new Notifications();
