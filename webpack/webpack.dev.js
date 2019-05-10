const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./common');
const resolve = require('./util').resolve;
const CleanWebpackPlugin = require('clean-webpack-plugin');

const CleanWebpackPluginConfig = new CleanWebpackPlugin();


const webpackConfig = {
	output: {
		filename: '[name].js',
		chunkFilename: '[name].chunk.js',
		publicPath : '/',
		path: resolve('./dev'),
	},

	devServer:{
		host: '127.0.0.1',   //服务器的ip地址
		port: 3000,  //端口
		open: true,  //自动打开页面
		// historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					'eslint-loader',
				],
				exclude: /node_modules/
			}
		]
	},
	plugins : [
		// new webpack.HotModuleReplacementPlugin(),
		// This plugin will cause the relative path of the module to be displayed
		// when HMR is enabled
		new webpack.NamedModulesPlugin(),
		CleanWebpackPluginConfig
	],
	mode: 'development'
}

module.exports = merge(common, webpackConfig);