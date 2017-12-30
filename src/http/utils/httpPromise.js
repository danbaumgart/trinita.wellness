import HttpRequest from '../models/request';
import RequestConfiguration from '../handlers/method/configuration';
import Methods from '../constants/request/methods';

export const HttpPromise = {
    GET(url, data) {
        return new Promise((resolve, reject) => {
            const config = new RequestConfiguration[Methods.GET](url, resolve, reject, data);
            return new HttpRequest(config);
        })
    },
    POST(url, data) {
        return new Promise((resolve, reject) => {
            const config = new RequestConfiguration[Methods.POST](url, resolve, reject, data);
            return new HttpRequest(config);
        });
    },
    PUT(url, data) {
        return new Promise((resolve, reject) => {
            const config = new RequestConfiguration[Methods.PUT](url, resolve, reject, data);
            return new HttpRequest(config);
        });
    },
    DELETE(url, data) {
        return new Promise((resolve, reject) => {
            const config = new RequestConfiguration[Methods.DELETE](url, resolve, reject, data);
            return new HttpRequest(config);
        });
    }
};
export default HttpPromise;