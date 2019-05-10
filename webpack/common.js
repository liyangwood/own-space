const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const resolve = require('./util').resolve;

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const extractSass = new ExtractTextPlugin({
	filename: "app.[hash:6].css"
});

const isDev = process.env.NODE_ENV === 'development';

const plugins = [
	extractSass,
	new HtmlWebpackPlugin({
		title: 'Template',
		template: resolve('./public/index.html'),
	})
	
];
if(!isDev){
	plugins.push(new OptimizeCssAssetsPlugin());
}

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
	optimization: {
		splitChunks: {
				cacheGroups: {
						commons: {
								name: "lib",
								chunks: "initial",
								minChunks: 2
						}
				}
		}
	},

	output: {
		path: resolve('./docs'),
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
					{
						loader: "css-loader",
						options: {

						}
					}
				],
			},
			{
				test: /\.scss$/,
				use: extractSass.extract([
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
						}
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true,
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
	plugins
};