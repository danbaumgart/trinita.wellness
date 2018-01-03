import LoggingStatus from './constants/status';
import Methods from '../../../http/constants/request/methods';
import IdentityModel from '../../../model/base/identity';
class Transaction extends IdentityModel {
	constructor(resource, method, timestamp, id) {
		super(id);
		this.method = method;
		this.resource = resource;
		this.timestamp = timestamp;
	}
	static begin(resource, method) {
		return new Transaction(resource, method, new Date(), this.AutoIdentity);
	}
	static close(transaction, status) {
		return new TransactionLog(transaction.resource, transaction.method, transaction.timestamp, transaction.id, status)
	}
	get success() {
		return Transaction.close(this, LoggingStatus.SUCCESS);
	}
	get failure() {
		return Transaction.close(this, LoggingStatus.FAIL);
	}

}
class TransactionLog extends Transaction {
	constructor(resource, method, timestamp, id, status) {
		super(resource, method, timestamp, id);
		this.duration = new Date().getTime() - timestamp.getTime();
		this.status = status;
	}
}
class TransactionLogger {
	constructor(resource) {
		this.resource = resource;
	}
	get GET() {
		return Transaction.begin(this.resource, Methods.GET);
	}
	get PUT() {
		return Transaction.begin(this.resource, Methods.PUT);
	}
	get POST() {
		return Transaction.begin(this.resource, Methods.POST);
	}
	get DELETE() {
		return Transaction.begin(this.resource, Methods.DELETE);
	}
}
export default TransactionLogger;
