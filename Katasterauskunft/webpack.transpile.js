const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/main.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "transpiled.js",
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader",
			},
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				options: {
					appendTsSuffixTo: [/\.vue$/],
					transpileOnly: true, //Typprüfung erfolgt durch vue-tsc
				},
				exclude: [/node_modules/],
			},
			{
				test: /\.css$/,
				loader: "css-loader",
			},
		],
	},
	resolve: {
		alias: {
			"./fonts/roboto-v20-latin-ext_latin-regular.woff2": path.resolve(__dirname, "./node_modules/primevue/resources/themes/mdc-light-indigo/fonts/roboto-v20-latin-ext_latin-regular.woff2"),
			"./fonts/roboto-v20-latin-ext_latin-regular.woff": path.resolve(__dirname, "./node_modules/primevue/resources/themes/mdc-light-indigo/fonts/roboto-v20-latin-ext_latin-regular.woff"),
			"./fonts/roboto-v20-latin-ext_latin-500.woff2": path.resolve(__dirname, "./node_modules/primevue/resources/themes/mdc-light-indigo/fonts/roboto-v20-latin-ext_latin-500.woff2"),
			"./fonts/roboto-v20-latin-ext_latin-500.woff": path.resolve(__dirname, "./node_modules/primevue/resources/themes/mdc-light-indigo/fonts/roboto-v20-latin-ext_latin-500.woff"),
			"./fonts/roboto-v20-latin-ext_latin-700.woff2": path.resolve(__dirname, "./node_modules/primevue/resources/themes/mdc-light-indigo/fonts/roboto-v20-latin-ext_latin-700.woff2"),
			"./fonts/roboto-v20-latin-ext_latin-700.woff": path.resolve(__dirname, "./node_modules/primevue/resources/themes/mdc-light-indigo/fonts/roboto-v20-latin-ext_latin-700.woff"),
		},
		extensions: [".tsx", ".ts", ".js", ".vue"],
		plugins: [new TsconfigPathsPlugin()],
	},
	plugins: [new VueLoaderPlugin()],
};
