const Countries = {
	UNITED_STATES_OF_AMERICA: 197
};
Object.defineProperty(Countries, 'values', {
	get: () => Object.values(Countries)
});
Object.freeze(Countries);
export default Countries;
