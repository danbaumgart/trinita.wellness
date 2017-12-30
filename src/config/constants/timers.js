const Timers = {
	DEBOUNCE: 300,
	SNACKBAR: 2500,
	TRANSITION: 500
};
Object.defineProperty(Timers, 'values', {
	get: () => Object.values(Timers)
});
Object.freeze(Timers);
export default Timers;