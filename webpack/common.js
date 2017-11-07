const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const resolve = require('./util').resolve;

module.exports = {
	entry: {
		main: [
			resolve('./src/app.js')
		],
		polyfills: resolve('./webpack/polyfills.js'),
		lib: [
			'react'
		]
		// style: resolve('./src/style/index.scss')
	},
	output: {
		path: resolve('./dist'),
	},
	resolve: {
		alias: {
			app: resolve('src')
		},
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: [
					// 'react-hot-loader',
					'babel-loader',
				],
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				include : [resolve('node_modules/bootstrap/dist/css')],
				use: [
					'style-loader',
					'css-loader',
				],
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
				use: [
					'file-loader',
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Template',
			template: resolve('./public/index.html'),
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'lib',
		}),
		// new webpack.optimize.CommonsChunkPlugin({
		//   name: 'runtime'
		// })
	],
};