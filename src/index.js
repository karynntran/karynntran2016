import 'jquery';
import 'underscore';
import 'lodash';
import 'backbone';
import AboutView from '../public/javascripts/backbone/views/aboutView';
import '../public/javascripts/backbone/collections/aboutCollection.js';
import '../public/stylesheets/sass/style.scss';
import categories from './app.js';

var aboutView = new AboutView(console.log('about'));

document.addEventListener("DOMContentLoaded", function (){
	$('#intro').addClass('animate');

	for (var i of categories) {
	  	$('#'+categories[i]).click(function(){
	  		console.log(categories[i])
	  	});
	}

	$('#about').on('click', function(){
		console.log('click about');
		aboutView.renderTest();
	})



});
