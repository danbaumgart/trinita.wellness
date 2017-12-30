const TransactionMethods = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
    PATCH: 'PATCH',
    HEAD: 'HEAD',
    CONNECT: 'CONNECT',
    OPTIONS: 'OPTIONS',
    TRACE: 'TRACE'
};
Object.defineProperty(TransactionMethods, 'values', {
    get: () => Object.values(TransactionMethods)
});
Object.freeze(TransactionMethods);
export default TransactionMethods;