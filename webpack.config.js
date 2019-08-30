var path = require('path');

module.exports = { //tell webpack at which file it should look to make our bundle
	// mode: 'none', or 'development' or 'production'
	entry: {
		App: "./app/assets/scripts/App.js",
		Vendor: "./app/assets/scripts/Vendor.js"
	},
	output: { //where we want the bundled fille to be created (Needs an absolute path)
		path: path.resolve(__dirname, "./app/temp/scripts"),
		filename: "[name].js"
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				//we want this bable loader to apply only to js files 
				test: /\.js$/,
				exclude: /node_model/
			}
		]
	}
};