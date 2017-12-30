const FieldState = {
	CLEAN: 'CLEAN',
	BLURRED: 'BLURRED',
	FOCUSED: 'FOCUSED'
};
Object.defineProperty(FieldState, 'values', {
	get: () => Object.values(FieldState)
});
Object.freeze(FieldState);
export default FieldState;
