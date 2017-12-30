const protocol = {
	HTTP: "http",
	HTTPS: "https",
	WS: "ws"
};
Object.defineProperty(protocol, "values", ({
	get: () => Object.values(protocol)
}));
export default Object.freeze(protocol);