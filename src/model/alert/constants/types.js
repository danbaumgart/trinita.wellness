const AlertTypes = {
    DEFAULT: 'DEFAULT',
	SUCCESS: 'SUCCESS',
	FAILURE: 'FAILURE'
};
Object.defineProperty(AlertTypes, 'values', {
	get: () => Object.values(AlertTypes)
});
Object.freeze(AlertTypes);
export default AlertTypes;