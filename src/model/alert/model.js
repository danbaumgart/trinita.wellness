import Model from '..';
import {AlertTypes} from './constants';
export class AlertModel extends Model {
	constructor(message, type = AlertTypes.DEFAULT) {
		super();
		if (!AlertTypes.values.includes(type)) AlertModel.throwTypeError(`Must be one of: ${JSON.stringify(AlertTypes.values)}.`, {type});
		this.type = AlertTypes[type];
		this.message = message;
	}
}
export default AlertModel;