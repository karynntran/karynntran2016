var path = require('path');
var webpack = require('webpack');


module.exports = {
	entry: path.join(__dirname, 'src'),
	output: {
	    path: './public/javascripts',
	    filename: 'bundle.js'
	},
	module: {
	  loaders: [
		{
		    test: /\.js$|\.jsx$/,
		    loader: 'babel-loader',
		    exclude: /node_modules/,
		    include: path.join(__dirname, 'src')
		},
		{
		    test: /\.scss$/,
		    loader: 'style!css!sass'
		},
        {
			test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
			loader : 'file-loader'
        },
        {
        	test: /\.(woff2?|svg|jpe?g|png|gif|ico)$/,
        	loader: 'url?limit=10000'
        },
        { 
        	test: /\.ejs$/,
        	loader: "ejs-loader?variable=data" 
        },
        {
	        test: /\.tpl$/,
	        loader: 'underscore-loader?variable=data'
      	},
      	{
      		test: /\.js$/,
            loader: 'babel',
            exclude: 'node_modules'
      	}
	  ]
	},
	resolve: {
	    moduleDirectories: [
	      'src',
	      'node_modules'
	    ],
	    extension: [
	      '',
	      '.js'
	    ],
	    alias: {
  			'underscore' : 'lodash'
	  	},
  	},
  	plugins: [
  		new webpack.ProvidePlugin({
    		$ : "jquery",
    		"_": "underscore",
    		"backbone": "backbone"
  	}) 
	]
}
