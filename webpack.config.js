var path = require('path');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
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
            exclude: 'node_modules',
            query: {compact: false}
      	},
		{
		    test: /\.js$|\.jsx$/,
		    loader: 'babel-loader',
		    exclude: /node_modules/,
		    include: path.join(__dirname, 'src')
		},
		// {
  //           test:   /\.css$/,
  //           loader: "style-loader!css-loader?modules&importLoaders=1!postcss-loader"
  //       },
		{
		    test: /\.scss$/,
		    loader: 'style!css!postcss!sass'
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
      	},
	  ]
	},
	postcss: function () {
        return [precss, autoprefixer];
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
