const Horizontal = {
	RIGHT: "RIGHT",
	LEFT: "LEFT",
	CENTER: "CENTER"
};
Object.defineProperty(Horizontal, "values", ({
	get: () => Object.values(Horizontal)
}));
Object.defineProperty(Horizontal, 'handler', {
	get: () => ({
		[Horizontal.RIGHT]: {position: 'absolute', right: '0px', width: '50%'},
		[Horizontal.LEFT]: {left: '0px', width: '50%'},
		[Horizontal.CENTER]: {display: 'flex', justifyContent: 'center'}
	})
});
export default Object.freeze(Horizontal);