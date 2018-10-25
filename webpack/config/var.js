'use strict'

const Webpack = require('webpack');
const { join, resolve } = require('path');

module.exports = {
  entry: join(__dirname, '..', 'src', 'index.js'),

  output: {
    filename: 'browser.js',
    library: 'myWidget',
    publicPath: ''
  },

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: join(__dirname, '..', 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                modules: false,
                targets: {
                  browsers: ['last 2 versions']
                }
              }],
              "@babel/preset-react"
            ],
            plugins: [
              ['@babel/plugin-proposal-class-properties', {
                loose: false
              }],
              ['@babel/plugin-transform-runtime', {
                helpers: false,
                regenerator: true
              }]
            ]
          }
        }
      }
    ]
  },

  resolve: {
    modules: [resolve(__dirname), '..', 'node_modules'],
    extensions: ['.js', '.jsx']
  }
};
