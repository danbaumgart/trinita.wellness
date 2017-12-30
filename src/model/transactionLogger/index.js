import IdentityModel from '../identity';
import Transaction from './transaction';
import {TransactionMethods} from './constants';
class TransactionLogger {
    constructor(resource) {
        this.resource = resource;
    }
    static GET(resource) {
        return Transaction.begin(resource, TransactionMethods.GET);
    }
    static PUT(resource) {
        return Transaction.begin(resource, TransactionMethods.PUT);
    }
    static POST(resource) {
        return Transaction.begin(resource, TransactionMethods.POST);
    }
    static DELETE(resource) {
        return Transaction.begin(resource, TransactionMethods.DELETE);
    }
    get GET() {
        return TransactionLogger.GET(this.resource);
    }
    get PUT() {
        return TransactionLogger.PUT(this.resource);
    }
    get POST() {
        return TransactionLogger.POST(this.resource);
    }
    get DELETE() {
        return TransactionLogger.DELETE(this.resource);
    }
}
export default TransactionLogger;