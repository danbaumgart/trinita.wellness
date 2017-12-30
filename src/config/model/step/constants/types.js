const Steps = {
	SCHEDULE: 'schedule',
	CONTACT: 'contact',
	INSTITUTION: 'institution'
};
Object.defineProperty(Steps, 'values', {
	get: () => Object.values(Steps)
});
export default Object.assign(Object.freeze(Steps));
