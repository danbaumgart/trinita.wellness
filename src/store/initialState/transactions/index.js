import log from './log';
import pending from './pending';
const transactions = {
	pending,
	log
};
Object.seal(transactions);
export default transactions;
