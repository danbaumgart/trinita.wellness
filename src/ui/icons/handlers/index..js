import React from '../../../utils/react/index';
import StatusIcons from '../../../utils/models/status/handlers/icons';
import StatusColors from '../../../utils/models/status/handlers/colors';
import Status from '../../../utils/models/status/constants/types';
export default Object.assign(...Status.values.map(status => {
	const IconHandler = StatusIcons[status];
	return {[status]: <IconHandler color={StatusColors[status]} />};
}));
