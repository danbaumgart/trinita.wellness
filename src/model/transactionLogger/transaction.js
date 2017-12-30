import IdentityModel from '../identity';
import {TransactionStatus} from './constants';
class Transaction extends IdentityModel {
    constructor(resource, method, timestamp, id) {
        super(id);
        this.method = method;
        this.resource = resource;
        this.timestamp = timestamp;
    }
    static begin(resource, method) {
        return new Transaction(resource, method, new Date(), this.identity);
    }
    static close(transaction, status) {
        if(Transaction.isInstance(transaction))
        return new TransactionLog(status, transaction.resource, transaction.method, transaction.timestamp, transaction.id);
    }
    get success() {
        return Transaction.close(this, TransactionStatus.SUCCESS);
    }
    get failure() {
        return Transaction.close(this, TransactionStatus.FAILURE);
    }
}
class TransactionLog extends Transaction {
    constructor(status, resource, method, timestamp, id) {
        super(resource, method, timestamp, id);
        this.duration = new Date().getTime() - timestamp.getTime();
        this.status = status;
    }
}
export default Transaction;
