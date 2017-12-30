import path from'path';
import webpack from 'webpack';
import Proxy from './tools/assets/constants/proxy';
import Protocol from './tools/assets/constants/protocol';
import Environment from './tools/assets/constants/environments';
export default {
	debug: true,
	devtool: 'cheap-module-eval-source-map',
	noInfo: false,
	entry: [
		'eventsource-polyfill', // necessary for hot reloading with IE
		'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
		'./src/index'
	],
	target: 'web',
	output: {
		path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './src'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
			{test: /(\.css)$/, loaders: ['style', 'css']},
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
			{test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
			{test: /\.(jpe?g|png|gif)$/i, loader: "url-loader"},
			{ test: /\.html$/, loader: 'jsx-loader!imports?React=react!html-jsx-loader'},
			{test: /\.mp4$/, loader: 'url?limit=10000&mimetype=video/mp4'}
		]
	}
};