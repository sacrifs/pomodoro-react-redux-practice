module.exports = {
	entry:__dirname + "/src/js/main.js",
	output:{
		path:__dirname + "/dist/js",
		filename:"app.js"
	},
	devtool: "#source-map",
	module:{
		loaders:[
			{test:/\.jsx?$/, loader: "babel", query: {presets: ["react", "es2015","stage-0"]}}
		]
	},
	resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
