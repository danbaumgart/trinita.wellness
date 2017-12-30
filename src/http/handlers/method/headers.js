import METHODS from '../../constants/request/methods';
import {APPLICATION_JSON, APPLICATION_X_WWW_FORM_URL_ENCODED} from '../../constants/request/headers/values/contentType';
import {XML_HTTP_REQUEST} from '../../constants/request/headers/values/xRequestedWith';
export default {
	[METHODS.GET]: [XML_HTTP_REQUEST, APPLICATION_X_WWW_FORM_URL_ENCODED],
	[METHODS.POST]: [APPLICATION_JSON],
	[METHODS.PUT]: [APPLICATION_JSON],
	[METHODS.DELETE]: [XML_HTTP_REQUEST, APPLICATION_X_WWW_FORM_URL_ENCODED]
};
