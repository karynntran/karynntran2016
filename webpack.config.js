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
      		test: /\.js$/,
            loader: 'babel',
            exclude: 'node_modules'
      	},
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
		    test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
		    loader: 'url-loader?limit=30000&name=./src/assets.[ext]'
		},
        { 
        	test: /\.ejs$/,
        	loader: "ejs-loader?variable=data" 
        },
        {
	        test: /\.tpl$/,
	        loader: 'underscore-loader?variable=data'
      	}
	  ]
	},
	resolve: {
	    moduleDirectories: [
	      'src',
	      'node_modules'
	    ],
	    extensions: [
	      '',
	      '.js',
	      '.scss',
	      '.jade'
	    ]
  	},
  	plugins: [
  		new webpack.ProvidePlugin({
    		$ : 'jquery'
  		})
	]
}
