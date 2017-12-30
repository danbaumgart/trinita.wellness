export const ToLocation = (data) => ({
	name: data && data.name || '',
	street: data && data.street || '',
	city: data && data.city || '',
	state: data && data.state || '',
	zip: data && data.zip || ''
});

const Institution = {
	name: '',
	street: '',
	city: '',
	state: '',
	zip: ''
};
Object.defineProperty(Institution, 'keys', {
	get: () => Object.keys(Institution)
});
Object.defineProperty(Institution, 'errors', {
	get: () => Object.assign(...Object.keys(Institution).map(key => ({[key]: []})))
});
Object.seal(Institution);
export default Institution;
