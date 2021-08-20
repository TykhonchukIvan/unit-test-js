const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

const ruleTypeScriptFiles = {
  test: [/\.ts$/, /\.tsx?$/, /\.js$/, /\.jsx?$/],
  exclude: /node_modules/,
  loader: 'ts-loader',
  resolve: {
    extensions: ['.ts', '.tsx', '.json'],
  },
};

const plugin = [
  new HtmlWebpackPlugin({
    template: path.join(__dirname, '/public/index.html'),
    filename: 'index.html',
  }),
];

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/build'),
    filename: '[name].[hash].js',
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
  },
  module: { rules: [ruleTypeScriptFiles] },
  plugins: [...plugin],
}