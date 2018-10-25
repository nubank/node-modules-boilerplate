'use strict'

const Webpack = require('webpack');
const { join, resolve } = require('path');

module.exports = {
  entry: join(__dirname, '..', 'src', 'index.js'),

  output: {
    filename: 'index.js',
    globalObject: "(typeof window !== 'undefined' ? window : this)",
    library: 'myWidget',
    libraryExport: 'umd',
    publicPath: ''
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
    },
    ['styled-components']: {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components',
      root: 'styled'
    }
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
