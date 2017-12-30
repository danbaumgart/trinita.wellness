import {HttpPromise} from '../utils/httpPromise';
import HttpUtils from '../utils/httpUtils';
class HttpService {
    constructor(url) {
        this.url = url;
    }
    static ToQueryParameters(parameters){
        return HttpUtils.toQueryParameters(parameters);
    }
    getURL(endpoint) {
        return `${this.url}${endpoint || ''}`;
    }
    Get(endpoint) {
        return HttpPromise.GET(this.getURL(endpoint));
    }
    Post(payload, endpoint) {
        return HttpPromise.POST(this.getURL(endpoint), payload);
    }
    Put(payload, endpoint) {
        return HttpPromise.PUT(this.getURL(endpoint), payload);
    }
    Delete(endpoint) {
		return HttpPromise.DELETE(this.getURL(endpoint));
    }
}
export default HttpService;
