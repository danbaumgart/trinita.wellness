const proxy = {
	TARGET: 'api.trinitawellness.com',
	HOST: 'local',
	PORT: 3000
};
Object.defineProperty(proxy, "values", ({
	get: () => Object.values(proxy)
}));
export default Object.freeze(proxy);