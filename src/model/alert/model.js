import {Model} from '../base';
import {AlertTypes} from './constants';
export class AlertModel extends Model {
	constructor(message, type = AlertTypes.DEFAULT) {
		super();
		if (!AlertTypes.values.includes(type)) AlertModel.throwTypeError({type});
		this.type = AlertTypes[type];
		this.message = message;
	}
	static get TYPE_ERROR_MESSAGE() {
		return `Must be one of: ${JSON.stringify(AlertTypes.values)}.`;
	}
}
export default AlertModel;