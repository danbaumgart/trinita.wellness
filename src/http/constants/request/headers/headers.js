const Headers = {
	CONTENT_TYPE: 'content-type',
	X_REQUESTED_WITH: 'x-requested-with',
	CONTENT_LENGTH: 'content-length',
	CACHE_CONTROL: 'cache-control'
};
Object.defineProperty(Headers, 'values', {
	get: () => Object.values(Headers)
});
Object.freeze(Headers);
export default Headers;