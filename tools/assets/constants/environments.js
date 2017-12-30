const environments = {
	PRODUCTION: "production",
	DEVELOPMENT: "development"
};
Object.defineProperty(environments, "values", ({
	get: () => Object.values(environments)
}));
export default Object.freeze(environments);