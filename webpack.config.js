var path = require('path');

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
		    include: path.join(__dirname, 'src')
		},
		{
		    test: /\.scss$/,
		    loader: 'style!css!sass'
		},
        {
			test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
			loader : 'file-loader'
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
	    ]
  	}
}
