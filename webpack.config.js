/* global __dirname */
var webpack = require('webpack');

module.exports = {
    entry: [
        "./index"
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: "babel"
			}
		]
	}
};