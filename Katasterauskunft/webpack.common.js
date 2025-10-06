/* 
Webpack Konfigurationen, die für alle Umgebungen gültig sind 
Diese Konfiguration wird mit einer der Konfigurationen für 'development' 
oder 'production' zusammengeführt.
*/

const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
	entry: "./src/main.js",
	output: {
		filename: "LMExplorerDemoKatasterauskunft.js",
		globalObject: "this",
		library: {
			name: "LMExplorerDemoKatasterauskunft",
			type: "umd",
		},
	},
	optimization: {},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader",
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: "css-loader",
					},
				],
			},
			{
				test: /\.(ttf|eot|woff|woff2)$/,
				type: "asset/resource",
				generator: {
					filename: "fonts/[name][ext][query]",
				},
			},
			{
				test: /\.(svg)$/,
				type: "asset/resource",
				generator: {
					filename: "assets/[name][ext]",
				},
			},
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: "ts-loader",
						options: {
							transpileOnly: true, //Typprüfung erfolgt durch vue-tsc
							appendTsSuffixTo: [/\.vue$/],
						},
					},
				],
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		new webpack.DefinePlugin({
			__VUE_OPTIONS_API__: "true",
			__VUE_PROD_DEVTOOLS__: "false",
			__VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
		}),
		new MiniCssExtractPlugin({
			filename: "css/lmexplorerdemokatasterauskunft.css",
		}),
	],
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".vue"],
		plugins: [new TsconfigPathsPlugin()],
	},
};
