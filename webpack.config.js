'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const SpritesmithPlugin = require('webpack-spritesmith');
const devMode = NODE_ENV == 'development';

module.exports = {

	entry: {
		main: ['webpack-dev-server/client?http://localhost:8080/',
					 'webpack/hot/dev-server',
					 './frontend/main']
	},

	output: {
		path: __dirname + '/js',
		publicPath: '/js/',
		filename: "[name].js?"
	},

	watch: devMode,

	devtool: devMode ? "eval" : "source-map",

	plugins: [
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV)
		}),
		new webpack.ProvidePlugin({
			$: 'jquery/dist/jquery.min'
		}),
		new ExtractTextPlugin("../[name].css", {
			allChunks: true
		}),
		new SpritesmithPlugin({
			src: {
				cwd: path.resolve(__dirname, 'images/src'),
				glob: '*.png'
			},
			target: {
				image: path.resolve(__dirname, 'images/sprite.png'),
				css: path.resolve(__dirname, 'sass/tools/_sprite.scss')
			},
			apiOptions: {
				cssImageRef: '/images//sprite.png'
			}
		}),
		new webpack.HotModuleReplacementPlugin()
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
        loader: devMode ?
				'style-loader!css-loader!sass-loader' :
				ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!sass-loader?sourceMap')
			},{
				test: /\.png$/,
				loader:'file?name=i/[hash].[ext]'
			}
		]
	},

	resolve: {
		modulesDirectories: ["web_modules", "node_modules", "spritesmith-generated"]
	},

	devServer: devMode ? {
		hot: true
	} : {}

};

if ( !devMode ) {
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
