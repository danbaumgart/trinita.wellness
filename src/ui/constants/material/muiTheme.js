const MuiTheme = {
	PRIMARY: "primary",
	SECONDARY: "secondary",
	DEFAULT: "default"
};
Object.defineProperty(MuiTheme, "values", ({
	get: () => Object.values(MuiTheme)
}));
export default Object.freeze(MuiTheme);