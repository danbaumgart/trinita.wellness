import proxy from 'http-proxy-middleware';
const protocol = process.env.NODE_ENV === 'production' ? 'http' : 'http';
export default proxy({
	target:`${protocol}://api.trinitawellness.com`,
	changeOrigin: true
});
