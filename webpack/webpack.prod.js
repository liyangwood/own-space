const merge = require('webpack-merge');
const common = require('./common');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const resolve = require('./util').resolve;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const CleanWebpackPluginConfig = new CleanWebpackPlugin();

const config = {
	output: {
		publicPath: '/',
		filename: '[name].[hash:12].js',
		chunkFilename: '[name].[hash:12].chunk.js',
	},
	plugins: [
		new webpack.HashedModuleIdsPlugin(),
		CleanWebpackPluginConfig,
	],
	optimization : {
		minimizer : [new UglifyJSPlugin({
			uglifyOptions: {
				output: {
						comments: false
				},
				compress: {
						warnings: false,
						drop_debugger: true,
						drop_console: true
				}
			}
		})],
	}
}

module.exports = merge(common, config);