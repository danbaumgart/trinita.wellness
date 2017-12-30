import Service from './service';
import Resources from './constants/resources';
class Contacts extends Service {
    constructor() {
        super(Resources.CONTACTS);
    }
    Post(contact) {
        return super.Post(contact).then(Service.ResponseMapper)
    }
}
export default new Contacts();
