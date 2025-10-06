/*
Webpack Konfigurationen für die 'development'-Umgebung 
*/

const path = require("path");

module.exports = {
	mode: "development",
	devtool: "source-map",
	watch: true,
	devServer: {
		devMiddleware: {
			writeToDisk: true,
		},
	},
	output: {
		path: path.resolve(__dirname, "C:/dev/git/Explorer/Core/ASmobile/src/main/webapp/scripts/vertigis"), // Achtung Entwickler-abhängiger Pfad - ersetzen!!!
		publicPath: "/asmobile/scripts/vertigis/", //important when loading assets!
	},
};
