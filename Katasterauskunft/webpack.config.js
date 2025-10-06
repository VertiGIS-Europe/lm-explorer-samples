/* 
Hauptkonfigurationsdatei für webpack
Die webpack Konfiguration setzt sich aus der allgemeinen Konfiguration 
und der jeweiligen Konfiguration für die Umgebungen 'development' oder 
'production' oder 'test' zusammen.
*/

const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');

module.exports = ({env}) => {
    console.log(`Build-Umgebung: ${env}`)
    const envConfig = require(`./webpack.${env}.js`);
    return merge(commonConfig, envConfig,{
        plugins: [
            // An dieser Stelle wird die aktuelle Buildumgebung als Environment-Variable 
            // für alle Sourcen zur Verfügung gestellt. Werte: 'dev', 'prod' oder 'test'
            new webpack.DefinePlugin({
                '_BUILD_ENV_': JSON.stringify(env)
            }),
        ],
    });  
}