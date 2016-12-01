'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const path = require('path');

module.exports = {

	entry: "./frontend/main",

	output: {
		path: __dirname + '/js',
		publicPath: '/js/',
		filename: "project.js"
	},

	watch: NODE_ENV == 'development',

	devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : "source-map",

	plugins: [
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV)
		}),
		new webpack.ProvidePlugin({
			$: 'jquery/dist/jquery.min'
		})
	],

	module: {

		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015'],
					plugins: ['transform-runtime']
				}
			},{
				test: /\.scss$/,
				loader: "style-loader!raw-loader!sass-loader?includePaths[]=" + path.resolve(__dirname, "./node_modules/compass-mixins/lib")
			}
		]

	}
};

if (NODE_ENV == 'production') {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: true,
				unsafe: true
			}
		})
	);
}
