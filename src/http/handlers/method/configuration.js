import METHODS from '../../constants/request/methods';
import RequestConfiguration from '../../models/request/configuration';
class GetConfiguration extends RequestConfiguration {
	constructor(resourceUrl, resolve, reject) {
		super(resourceUrl, METHODS.GET, resolve, reject);
	}
}
class PostConfiguration extends RequestConfiguration {
	constructor(resourceUrl, resolve, reject, data) {
		super(resourceUrl, METHODS.POST, resolve, reject, data);
	}
}
class PutConfiguration extends RequestConfiguration {
	constructor(resourceUrl, resolve, reject, data) {
		super(resourceUrl, METHODS.PUT, resolve, reject, data);
	}
}
class DeleteConfiguration extends RequestConfiguration {
	constructor(resourceUrl, resolve, reject, data) {
		super(resourceUrl, METHODS.DELETE, resolve, reject, data);
	}
}
export default {
	[METHODS.GET]: GetConfiguration,
	[METHODS.POST]: PostConfiguration,
	[METHODS.PUT]: PutConfiguration,
	[METHODS.DELETE]: DeleteConfiguration
};
