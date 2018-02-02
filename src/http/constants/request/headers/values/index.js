import {APPLICATION_JSON, APPLICATION_X_WWW_FORM_URL_ENCODED} from './contentType';
import ContentType from '../types/contentType';
import {XML_HTTP_REQUEST} from './xRequestedWith';
import {NO_CACHE} from  './cacheControl';
const VALUES = {
	CONTENT_TYPE: ContentType,
	X_REQUESTED_WITH: {XML_HTTP_REQUEST},
	CACHE_CONTROL: {NO_CACHE}
};
export const {CONTENT_TYPE, X_REQUESTED_WITH, CACHE_CONTROL} = VALUES;
