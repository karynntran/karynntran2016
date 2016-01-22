// require('./public/stylesheets/css/fonts');
// require('../public/stylesheets/sass/style.scss');
import $ from 'jquery';
import categories from './app.js';

document.addEventListener("DOMContentLoaded", function (){
	$('#intro').addClass('animate');

	for (var i of categories) {
	  	$('#'+categories[i]).click(function(){
	  		console.log(categories[i])
	  	});
	}
});
