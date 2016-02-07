import 'jquery';
import 'underscore';
//import * as __ from 'lodash';
import 'backbone';
import AboutView from '../public/javascripts/backbone/views/aboutView.js';
import '../public/javascripts/backbone/collections/aboutCollection.js';
import '../public/stylesheets/sass/style.scss';
import categories from './app.js';

var aboutView = new AboutView();


document.addEventListener("DOMContentLoaded", function (){
	$('#intro').addClass('animate');

	for (var i of categories) {
	  	$('#'+categories[i]).click(function(){
	  		console.log(categories[i])
	  	});
	}

	// $('#about').on('click', function(){
	// 	// console.log('click about');
	// 	// aboutView.renderTest();
	// })


	Backbone.history.start();

});

