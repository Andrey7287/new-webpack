npm NODE_ENV=production
npm SET NODE_ENV=development
devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : "source-map",
let $ = require('jquery/dist/jquery.min');
webpack --profile --display-modules --display-reason
noParse: /\/node_modules\/jquery\/dist\/jquery.min.js/
include: __dirname + '/frontend',