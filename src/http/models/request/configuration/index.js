import HttpUtils from '../../../utils/httpUtils';
import MethodHeaders from '../../../handlers/method/headers';
import {CONTENT_TYPE} from '../../../constants/request/headers/values';
import HEADERS from '../../../constants/request/headers';
class RequestConfiguration {
	constructor(resourceUrl, methodType, resolve, reject, data) {
		this.resourceUrl = resourceUrl;
		this.methodType = methodType;
		this.promiseHandlers = {resolve, reject};
		this.requestHeaders = MethodHeaders[methodType].map(HttpUtils.ToRequestHeader);
		this.params =  RequestConfiguration.MapParams(this.requestHeaders, data);
	}
	static MapParams(requestHeaders, data) {
		const contentType = requestHeaders.find(requestHeader => requestHeader.header === HEADERS.CONTENT_TYPE);
		if (contentType && contentType.value === CONTENT_TYPE.APPLICATION_JSON)
			return JSON.stringify(data);
		return HttpUtils.toEncodedParameters(data);
	}
}
export default RequestConfiguration;
