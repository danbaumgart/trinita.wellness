import CODE_HANDLER from './code';
import CLASS_HANDLER from './class';
export default {
	getStatusClass(status) {
		return CLASS_HANDLER[Math.floor(status/100)];
	},
	getStatusDescription(status) {
		return CODE_HANDLER[status];
	}
};
