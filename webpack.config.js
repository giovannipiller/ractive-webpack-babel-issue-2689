/* eslint-disable */
var webpack = require('webpack');
var path = require('path');


const globalPlugins = [];

module.exports = {
  entry: {
    // app's entry point
    app: './src/app.js',

  },
  output: {
    publicPath: '/public/',
    path: path.join(__dirname, 'public'),
    pathinfo: 'public',
    filename: '[name].bundle.js',
  },
  resolve: {
    root: path.join(__dirname, './') , // frontend-app
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',

        // no need to run the loader through vendors
        exclude: /node_modules/,
      },
    ],
  },
};
