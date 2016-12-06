'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const SpritesmithPlugin = require('webpack-spritesmith');

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
		}),
		new SpritesmithPlugin({
			src: {
				cwd: path.resolve(__dirname, 'images/src'),
				glob: '*.png'
			},
			target: {
				image: path.resolve(__dirname, 'images/sprite.png'),
				css: path.resolve(__dirname, 'sass/_sprite.scss')
			},
			apiOptions: {
				cssImageRef: '/images//sprite.png'
			}
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
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!sass-loader?sourceMap')
			},{
				test: /\.png$/,
				loader:'file?name=i/[hash].[ext]'
			}
		]
	},

	resolve: {
		modulesDirectories: ["web_modules", "node_modules", "spritesmith-generated"]
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
