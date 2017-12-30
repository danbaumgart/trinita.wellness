import HttpProxy from '../http/models/httpService';
import Globals from '../config/constants/environment';
import TransactionLogger from '../model/transactionLogger';
class Service extends HttpProxy {
    constructor(resource) {
        super(`${Globals.API_HOST}/api/${resource}`);
	    this.logger = new TransactionLogger(resource);
    }
    static ResponseMapper(response) {
        return response.content;
    }
    Get(endpoint) {
        return super.Get(endpoint);
    }
	Post(data, endpoint) {
		return super.Post(data, endpoint);
	}
    Put(data, endpoint) {
        return super.Put(data, endpoint);
    }
    Delete(endpoint) {
        return super.Delete(endpoint);
    }
}
export default Service;
