const Labels = {
	Schedule: 'Schedule',
	Contact: 'Contact',
	Location: 'Location'
};
Object.defineProperty(Labels, 'values', {
	get: () => Object.values(Labels)
});
export default Object.assign(Object.freeze(Labels));
