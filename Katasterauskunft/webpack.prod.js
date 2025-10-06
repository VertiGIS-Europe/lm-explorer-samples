/*
Webpack Konfigurationen für die 'production'-Umgebung 
*/

const path = require("path");

module.exports = {
	mode: "production",
	devtool: "source-map",

	optimization: {
		minimize: true,
	},
	output: {
		path: path.resolve(__dirname, "./build"),
		publicPath: "../", //important when loading assets!
	},
};
