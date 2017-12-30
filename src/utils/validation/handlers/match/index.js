import RESTRICTED from './restricted';
import UNRESTRICTED from './unrestricted';
export default {
	ENTIRE(input, criteria){
		return RESTRICTED[criteria].test(input.trim());
	},
	COUNT(input, criteria){
		return input.match(new RegExp(UNRESTRICTED[criteria], 'g')) || [];
	}
};
