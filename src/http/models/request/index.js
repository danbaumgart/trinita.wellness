import {STATUS, CLASS} from '../../constants/status';
import READY_STATES from '../../constants/request/readyStates';
import METHODS from '../../constants/request/methods';
import RequestStatus from './status';
class HttpRequest {
    constructor(config) {
        this.ajax = new XMLHttpRequest();
        this.ajax.withCredentials = false;
        this.onReadyStateChange(config.promiseHandlers);

        this.open(config.methodType, config.resourceUrl);
        this.setRequestHeaders(config.requestHeaders);
        this.send(config.params);
    }
    open(methodType, resourceUrl) {
        this.ajax.open(methodType, resourceUrl, true);
    }
    setRequestHeaders(requestHeaders) {
        requestHeaders.forEach(requestHeader => {
            const {header, value} = requestHeader;
            this.ajax.setRequestHeader(header, value)
		});
    }
    onReadyStateChange({resolve, reject}){
        this.ajax.onreadystatechange = function() {
            const response = new RequestStatus(this.status);
            if (this.readyState === READY_STATES.DONE) {
                if(response.status === STATUS.OK || response.status === STATUS.NOT_MODIFIED)
                    resolve(JSON.parse(this.responseText));
                else if(response.type === CLASS.SUCCESSFUL)
					resolve(this.response);
                else reject({response, description: this.statusText});
            }
        };
    }
    onLoad({resolve, reject}) {
        if(typeof resolve === 'function' && typeof reject === 'function') {
            this.ajax.onload = function () {
				const response = new RequestStatus(this.status);
                if (response.status === STATUS.OK || response.status === STATUS.NOT_MODIFIED)
                    resolve(JSON.parse(this.responseText));
            };
        }

    }
    onError({reject}) {
        if (typeof reject === 'function')
            this.ajax.onerror = function(){
                const status = new RequestStatus(this.status);
                reject({status, description: this.statusText});
            };
    }
    send(params) {
        if(params) this.ajax.send(params);
        else this.ajax.send();
    }
}
export default HttpRequest;
