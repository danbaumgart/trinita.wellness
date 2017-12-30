import RequestHeader from '../handlers/header';
import StatusClass from '../handlers/status/class';
const toEncodedParameters = data => data && typeof data !== 'string' ?
    Object.keys(data).map(key => [
        encodeURIComponent(key),
        encodeURIComponent(data[key])
    ].join('=')).join('&') : encodeURIComponent(data);
export const toQueryParameters = parameters => `?${toEncodedParameters(parameters)}`;
export const ToRequestHeader = value => RequestHeader[value];
export const getStatusClass = status => StatusClass[Math.floor(status/100)];
export default {ToRequestHeader, getStatusClass, toEncodedParameters, toQueryParameters};