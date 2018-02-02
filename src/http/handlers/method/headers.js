import Methods from '../../constants/request/methods';
import {APPLICATION_JSON, APPLICATION_X_WWW_FORM_URL_ENCODED} from '../../constants/request/headers/values/contentType';
import {XML_HTTP_REQUEST} from '../../constants/request/headers/values/xRequestedWith';
export default {
	[Methods.GET]: [XML_HTTP_REQUEST, APPLICATION_X_WWW_FORM_URL_ENCODED],
	[Methods.POST]: [APPLICATION_JSON],
	[Methods.PUT]: [APPLICATION_JSON],
	[Methods.DELETE]: [XML_HTTP_REQUEST, APPLICATION_X_WWW_FORM_URL_ENCODED]
};
