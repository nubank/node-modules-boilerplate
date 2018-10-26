'use strict'

const Webpack = require('webpack');
const { join, resolve } = require('path');

module.exports = {
  entry: join(__dirname, '..', 'src', 'index.js'),

  mode: 'production',

  optimization: { minimizer: [] },

  output: {
    filename: 'index.js',
    library: 'MyWebpackWidget',
    libraryTarget: 'umd'
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    },
    ['react-dom']: {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM'
    }
  },

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
