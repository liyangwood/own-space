const merge = require('webpack-merge');
const common = require('./common');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const resolve = require('./util').resolve;

const CleanWebpackPluginConfig = new CleanWebpackPlugin(
	[
		resolve('./dist')
	],
	{
		root: process.cwd(),
		verbose: true,
		dry: false
	}
);

const config = {
	output: {
		publicPath: '/',
		filename: '[name].[chunkhash:12].js',
		chunkFilename: '[name].[chunkhash:12].chunk.js',
	},
	plugins: [
		new webpack.HashedModuleIdsPlugin(),
		CleanWebpackPluginConfig,
		new webpack.optimize.UglifyJsPlugin({
			minimize: true
		})
	],
}

module.exports = merge(common, config);