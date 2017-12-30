const Environments = {
	PRODUCTION: 'production',
	DEVELOPMENT: 'development'
};

const PROD = {
	API_HOST: 'http://api.trinitawellness.com'
};
const PORT = {LOCAL_WEB: 3000, LOCAL_API: 28536};
const DEV = {
	API_HOST: PROD.API_HOST// `http://localhost:${PORT.LOCAL_API}`
};
export const isProductionEnvironment = () => process.env.NODE_ENV === 'production';





export default isProductionEnvironment() ? PROD : DEV;
