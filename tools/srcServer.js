import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import proxyService from './assets/proxyService';
//import fs from 'fs';
// Setup HTTPS
// const ssl = {
// 	key: fs.readFileSync('./tools/assets/private.key'),
// 	cert: fs.readFileSync('./tools/assets/certificate.pem')
// };
//import favicon from 'serve-favicon';
/* eslint-disable no-console */


const favicon = require('serve-favicon');
const PORT = process.env.NODE_ENV === "production" ? 5000 : 3000;
const compiler = webpack(config);
const app = express();
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
//});
//Object.assign(proxyService, {ssl});
app.use('/api', proxyService);
app.use(require('webpack-hot-middleware')(compiler));
// app.use(favicon(__dirname + '/assets/public/favicon.ico'));
app.use(favicon(path.join(__dirname,'assets','public','favicon.ico')));
app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

//const httpsProxy = https.createServer(ssl, app);


app.listen(PORT, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${PORT}`);
  }
});