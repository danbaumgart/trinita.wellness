import Resources from './resources';
const ENVIRONMENT = {
	DEV: 'development',
	PROD: 'production'
};
const API = {
		DOMAIN: {DEV:'http://localhost:3000', PROD: 'http://api.trinitawellness.com'},
		Resources
};
Object.defineProperty(API, "values", ({
	get: () => Object.values(API)
}));
Object.freeze(API);
export default API;