export const Display = {
	NONE: 'none',
	BLOCK: 'block',
	INLINE_BLOCK: 'inline-block',
	FLEX: 'flex'
};
Object.defineProperty(Display, 'values', {
	get: () => Object.values(Display)
});
export default Object.freeze(Display);