const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const common = require('./webpack.common.js');

const mode = 'production';
const getPluginsBuild = () => ([new CleanWebpackPlugin()]);


module.exports = merge(common, {
  mode: mode,
  plugins: getPluginsBuild(),
});