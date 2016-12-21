setx NODE_ENV production
setx NODE_ENV development

devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : "source-map",
let $ = require('jquery/dist/jquery.min');
webpack --profile --display-modules --display-reason
noParse: /\/node_modules\/jquery\/dist\/jquery.min.js/
include: __dirname + '/frontend',

test: /\.scss$/,
				loader: "raw-loader!sass-loader?includePaths[]=" + path.resolve(__dirname, "./node_modules/compass-mixins/lib")


{
	test: /\.s?css$/,
	loader: ExtractTextPlugin.extract({
			fallbackLoader: 'style',
			loader: [
					{
							loader: 'css',
							options: {
									sourceMap: true,
									modules: true,
									localIdentName: NODE_ENV === 'development'
											? '[name]__[local]___[hash:base64:5]'
											: '[hash:base64:5]'
							}
					},
					{
							loader: 'sass',
							options: {
									includePaths: customPaths
							}
					},
					{
							loader: 'postcss',
							options: {
									plugins: () => [
											autoprefixer
									]
							}
					}
			]
	})
}

&includePaths[]=' + path.resolve(__dirname, "./node_modules/compass-mixins/lib")

resolve-url!
loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!ruby-sass-loader?compass=1')

entry: "./frontend/main",


require.ensure([], (require) => {

		require('./modules/ravno');
		$('.ttt').ravno();
	});

	"devDependencies": {
		"babel-core": "^6.18.2",
		"babel-loader": "^6.2.8",
		"babel-plugin-transform-runtime": "^6.15.0",
		"babel-preset-es2015": "^6.18.0",
		"babel-runtime": "^6.18.0",
		"css-loader": "^0.26.1",
		"extract-text-webpack-plugin": "^1.0.1",
		"node-sass": "^3.13.0",
		"raw-loader": "^0.5.1",
		"resolve-url-loader": "^1.6.0",
		"ruby-sass-loader": "^0.3.0",
		"sass-loader": "^4.0.2",
		"sass-resources-loader": "^1.1.0",
		"script-loader": "^0.7.0",
		"style-loader": "^0.13.1",
		"webpack": "^1.13.3",
		"webpack-dev-server": "^1.16.2",
		"webpack-livereload-plugin": "^0.9.0",
		"webpack-spritesmith": "^0.3.0"
	}
