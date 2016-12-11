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