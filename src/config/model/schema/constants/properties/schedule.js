const ScheduleProperties = {
	DATE: 'date',
	TIME: 'time',
	DETAILS: 'details',
	FLEXIBLE: 'flexible'
};
Object.defineProperty(ScheduleProperties, "values", {
	get: () => Object.values(ScheduleProperties)
});
Object.freeze(ScheduleProperties);
export default ScheduleProperties;