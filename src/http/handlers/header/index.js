import {APPLICATION_JSON, APPLICATION_X_WWW_FORM_URL_ENCODED} from '../../constants/request/headers/values/contentType';
import {XML_HTTP_REQUEST} from '../../constants/request/headers/values/xRequestedWith';
import {ContentType, XRequestedWith} from '../../models/request/header';
export default {
	[APPLICATION_X_WWW_FORM_URL_ENCODED]: new ContentType(APPLICATION_X_WWW_FORM_URL_ENCODED),
	[APPLICATION_JSON]: new ContentType(APPLICATION_JSON),
	[XML_HTTP_REQUEST]: new XRequestedWith(XML_HTTP_REQUEST)
};
