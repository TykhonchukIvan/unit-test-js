const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    open: false,
    host: 'localhost',
    port: 7777,
    historyApiFallback: true,
  },
});