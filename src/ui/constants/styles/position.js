const Position = {
	FIXED: 'fixed',
	ABSOLUTE: 'absolute',
	RELATIVE: 'relative'
};
Object.defineProperty(Position, 'values', {
	get: () => Object.values(Position)
});
export default Object.freeze(Position);