'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {

	entry: "./frontend/main",

	output: {
		path: __dirname + '/js',
		publicPath: '/js/',
		filename: "project.js"
	},

	//watch: NODE_ENV == 'development',

	devtool: "source-map",

	plugins: [
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV)
		}),
		new webpack.ProvidePlugin({
			$: 'jquery/dist/jquery.min'
		}),
		new ExtractTextPlugin("../styles.css", {
			allChunks: true
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
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!resolve-url!sass-loader?sourceMap')
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
