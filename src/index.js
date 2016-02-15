import 'jquery';
import 'underscore';
//import * as __ from 'lodash';
import 'backbone';
import '../public/stylesheets/sass/style.scss';
import AboutView from '../public/javascripts/backbone/views/aboutView';
// import '../public/javascripts/backbone/collections/aboutCollection.js';
import categories from './app.js';

document.addEventListener("DOMContentLoaded", function (){
	$('#intro').addClass('animate');

	for (var i of categories) {
	  	$('#'+categories[i]).click(function(){
	  		console.log(categories[i])
	  	});
	}

	$('#about').on('click', function(){
		console.log('clicked on about');
	})


	var aboutView = new AboutView(console.log('am i working'));
	Backbone.history.start();

});

