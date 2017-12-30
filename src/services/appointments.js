import Service from './service';
import {DateTime} from '../utils/dateTime/model';
import Resources from './constants/resources';
class Appointments extends Service {
    constructor() {
        super(Resources.APPOINTMENTS);
    }
    static ToDomainModel(viewModel, {contactId, locationId}) {
        return {
            contactId,
            locationId,
            flexible: viewModel.flexible,
            details: viewModel.details,
            dateTime: DateTime.ToStandardDate(viewModel.date, viewModel.time)
        };
    }
    Post(schedule, contactId, locationId) {
        return super.Post(Appointments.ToDomainModel(schedule, {contactId, locationId})).then(Service.ResponseMapper);
    }
    PostNotification(appointmentId) {
        return super.Post(null, `/${appointmentId}/notification`);
    }
}
export default new Appointments();
