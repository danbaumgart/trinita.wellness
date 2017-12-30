import {Alerts} from './constants';
import {ModelErrors} from './utils';
import {AlertStatuses} from './handler';
import {StatusObjects} from '../status/handlers';
export class AlertModel {
	constructor(message, type = Alerts.DEFAULT) {
		if (!Alerts.values.includes(type)) AlertModel.ThrowInvalidStatusError(type);
		const statusType = AlertStatuses[type];
		this.status = StatusObjects[statusType];
		this.message = message;
	}
	static ThrowInvalidStatusError(status) {
		throw ModelErrors.InvalidStatusError(status);
	}
	static IsAlertModel(model) {
		return model instanceof AlertModel;
	}
}
export default AlertModel;