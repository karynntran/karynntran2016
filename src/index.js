import 'jquery';
import * as intro from './intro.js';
import '../public/stylesheets/sass/style.scss';

tmpl.arg = 'data';

$(document).ready(function (){
	$('#app').addClass('on');
	intro.render('.page', 'intro-template', data.landing.intro);
	setTimeout(function(){
		intro.flipper();
	},500)
});

