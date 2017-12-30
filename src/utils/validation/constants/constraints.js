const Constraints = {
	REQUIRED: 'required',
	MINIMUM: 'minimum',
	MAXIMUM: 'maximum',
	RESTRICT: 'restrict'
};
Object.defineProperty(Constraints, 'values', {
	get: () => Object.values(Constraints)
});
Object.freeze(Constraints);
export default Constraints;