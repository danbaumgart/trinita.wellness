const Status = {
	READY: "ready",
	LOADING: "loading",
	HIDE: "hide"
};
Object.defineProperty(Status, "values", ({
	get: () => Object.values(Status)
}));
Object.freeze(Status);
export default Status;