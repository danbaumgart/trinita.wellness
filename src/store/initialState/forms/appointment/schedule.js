const Schedule = {
    date: null,
    time: null,
    flexible: false,
    details: ''
};
Object.defineProperty(Schedule, 'errors', {
	get: () => Object.assign(...Object.keys(Schedule).map(key => ({[key]: []})))
});
Object.seal(Schedule);
export default Schedule;
