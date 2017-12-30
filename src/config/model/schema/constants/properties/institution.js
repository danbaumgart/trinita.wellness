const InstitutionProperties = {
	NAME: 'name',
	STREET: 'street',
	CITY: 'city',
	STATE: 'state',
	ZIP: 'zip'
};
Object.defineProperty(InstitutionProperties, "values", {
	get: () => Object.values(InstitutionProperties)
});
Object.freeze(InstitutionProperties);
export default InstitutionProperties;