import HEADERS from '../../../constants/request/headers/';
class RequestHeader {
	constructor(header, value) {
		this.header = header;
		this.value = value;
	}
}
export class ContentType extends RequestHeader {
	constructor(value) {
		super(HEADERS.CONTENT_TYPE, value);
	}
}
export class XRequestedWith extends RequestHeader {
	constructor(value) {
		super(HEADERS.X_REQUESTED_WITH, value);
	}
}
export default RequestHeader;