const Float = {
	RIGHT: "right",
	LEFT: "left"
};
Object.defineProperty(Float, 'values', {
	get: () => Object.values(Float)
});
Object.defineProperty(Float, 'handler', {
	get: () => ({
		[Float.RIGHT]: 'rightFloat',
		[Float.LEFT]: 'leftFloat'
	})
});
export default Object.freeze(Float);