const FormStates = {
	CLEAN: 'CLEAN',
	DIRTY: 'DIRTY',
	SUBMITTED: 'SUBMITTED'
};
Object.defineProperty(FormStates, 'values', {
	get: () => Object.values(FormStates)
});
Object.freeze(FormStates);
export default FormStates;
