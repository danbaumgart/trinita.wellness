const Resources = {
    UNIVERSITIES: 'universities',
	QUESTIONS: 'questions',
    CONTACTS: 'contacts',
    APPOINTMENTS: 'appointments',
    STATES: 'states',
    LOCATIONS: 'locations',
	NOTIFICATIONS: 'notifications'
};
Object.defineProperty(Resources, 'values', {
	get: () => Object.values(Resources)
});
Object.freeze(Resources);
export default Resources;