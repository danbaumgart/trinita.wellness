const Colors = {
	PURPLE: '#4b0082',
	GREEN_YELLOW: '#a8b019',
	WHITE: '#ffffff',
	BLACK: '#000000',
	PALE_GREEN: '#648a32',
	RED: '#780000',
	ORANGE: '#ffa500'
};
Object.defineProperty(Colors, 'values', {
	get: () => Object.values(Colors)
});
Object.freeze(Colors);
export default Colors;