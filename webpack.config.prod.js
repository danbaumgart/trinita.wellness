// webpack.config.prod.js
import path from'path';
import webpack from 'webpack';
import Proxy from './tools/assets/constants/proxy';
import Protocol from './tools/assets/constants/protocol';
import Environment from './tools/assets/constants/environments';
export default {
	devtool: 'source-map',

	entry: [
		'./src/index'
	],

	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/public/'
	},

	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			compress: {
				warnings: false
			}
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(Environment.PRODUCTION)
			}
		})
	],

	module: {
		loaders: [
			{test: /\.js?$/,loader: 'babel',exclude: /node_modules/},
			{test: /(\.css)$/, loaders: ['style', 'css']},
			{test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,loader: 'file'},
			{test: /\.(jpe?g|png|gif)$/i, loader: "url-loader"},
			{test: /\.mp4$/, loader: 'url?limit=10000&mimetype=video/mp4'},
			{ test: /\.html$/, loader: 'html' }
		]
	}
}