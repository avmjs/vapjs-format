var webpack = require('webpack'); // eslint-disable-line
const UglifyJSPlugin = require("uglifyjs-webpack-plugin"); // eslint-disable-line

var env = process.env.NODE_ENV;   // eslint-disable-line
var filename = 'vapjs-format';      // eslint-disable-line
var library = 'vapFormat';          // eslint-disable-line
var config = {                    // eslint-disable-line
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  devtool: 'cheap-module-source-map',
  output: {
    path: 'dist',
    filename: filename + '.js',       // eslint-disable-line
    library: library,                 // eslint-disable-line
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  plugins: [
    new webpack.BannerPlugin({ banner: ' /* eslint-disable */ ', raw: true, entryOnly: true }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
  ],
};

if (env === 'production') {
  config.output.filename = filename + '.min.js'; // eslint-disable-line
  config.plugins
  .push(new UglifyJSPlugin({
    sourceMap: true,
    uglifyOptions: {
      compress: {
        warnings: false,
      },
    },
  }));
  config.plugins.push(new webpack.optimize.DedupePlugin());
}

module.exports = config;
