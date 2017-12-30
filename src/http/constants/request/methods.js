const Methods = {
	GET: 'GET',
	POST: 'POST',
	PUT: 'PUT',
	DELETE: 'DELETE',
	PATCH: 'PATCH',
	HEAD: 'HEAD',
	CONNECT: 'CONNECT',
	OPTIONS: 'OPTIONS',
	TRACE: 'TRACE'
};
Object.defineProperty(Methods, 'values', {
	get: () => Object.values(Methods)
});
Object.freeze(Methods);
export default Methods;