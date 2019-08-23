var path = require('path');
var webpack = require('webpack');

module.exports = { //tell webpack at which file it should look to make our bundle
	entry: "./app/assets/scripts/App.js",
	output: { //where we want the bundled fille to be created (Needs an absolute path)
		path: path.resolve(__dirname, "./app/temp/scripts"),
		filename: "App.js"
	}
}