const TransactionStatus = {
    PENDING: "PENDING",
    FAILURE: "FAILURE",
    SUCCESS: "SUCCESS"
};
Object.defineProperty(TransactionStatus, 'values', {
    get: () => Object.values(TransactionStatus)
});
Object.freeze(TransactionStatus);
export default TransactionStatus;