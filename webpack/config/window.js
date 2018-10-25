'use strict'

const Webpack = require('webpack');
const { join, resolve } = require('path');

module.exports = {
  entry: join(__dirname, '..', 'src', 'index.js'),

  output: {
    filename: 'browser.js',
    globalObject: "(typeof window !== 'undefined' ? window : this)",
    library: 'myWidget',
    libraryExport: 'window',
    publicPath: ''
  },

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: join(__dirname, '..', 'src'),
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  resolve: {
    modules: [resolve(__dirname), '..', 'node_modules'],
    extensions: ['.js', '.jsx']
  }
};