const LoggingStatus = {
	PENDING: "PENDING",
	FAIL: "FAIL",
	SUCCESS: "SUCCESS"
};
Object.defineProperty(LoggingStatus, 'values', {
	get: () => Object.values(LoggingStatus)
});
Object.freeze(LoggingStatus);
export default LoggingStatus;