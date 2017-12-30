import {INVALID_STATUS_ARGUMENT} from '../constants/exceptions';
class Exceptions {
	static InvalidStatusError(status) {
		return new Error(INVALID_STATUS_ARGUMENT(status));
	}
}
export default Exceptions;