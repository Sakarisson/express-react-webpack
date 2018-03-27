import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import LiveReloadPlugin from 'webpack-livereload-plugin';
import htmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin';
import dotenv from 'dotenv';

dotenv.config();

export default {
  entry: ['babel-polyfill', './client/index.js'],
  output: {
    path: __dirname + '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'client/index.html',
      alwaysWriteToDisk: true,
      hash: true
    }),
    new LiveReloadPlugin(),
    new htmlWebpackHarddiskPlugin()
  ],
  mode: process.env.MODE
};
