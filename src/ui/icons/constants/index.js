import colors from '../../../utils/models/status/handlers/colors';
import icons from '../../../utils/models/status/handlers/icons';
import handler from '../handlers/index.';
import StatusConstants from '../../../utils/models/status/constants/types';

const Status = Object.assign({}, StatusConstants);
Object.defineProperties(Status, {
	'colors': {colors},
	'icons': {icons},
	'handler': {handler}
});
export default Status;
