const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const resolve = require('./util').resolve;

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
	filename: "app.[contenthash:6].css"
});

module.exports = {
	entry: {
		main: [
			resolve('./src/app.js')
		],
		polyfills: resolve('./webpack/polyfills.js'),
		lib: [
			'react'
		]
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
					'css-loader'
				],
			},
			{
				test: /\.scss$/,
				use: extractSass.extract([
					{
						loader: "css-loader",
						options: {
							// sourceMap: true
						}
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true
						}
					}
				])
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
		extractSass,
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