const AlertTypes = {
	SUCCESS: "SUCCESS",
	FAILURE: "FAILURE",
	DEFAULT: "DEFAULT"
};
Object.defineProperty(AlertTypes, 'values', {
	get: () => Object.values(AlertTypes)
});
Object.freeze(AlertTypes);
export default AlertTypes;