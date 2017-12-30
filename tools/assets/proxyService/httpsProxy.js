import https from 'https';
import fs from 'fs';
const httpsPort = 3443;
// Setup HTTPS
const options = {
	key: fs.readFileSync('../private.key'),
	cert: fs.readFileSync('../certificate.pem')
};
export default function(app){
	return https.createServer(options, app).listen(httpsPort);
}