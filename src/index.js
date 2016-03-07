import 'jquery';
import * as intro from './intro.js';
import '../public/stylesheets/sass/style.scss';

tmpl.arg = 'data';

$(document).ready(function (){
	$('#app').addClass('on');
	intro.prepend('.content-container', 'intro-template', data.landing.intro);
	setTimeout(function(){
		intro.flipper();
	},500)
	
	$('.intro-container').on('click', function(){
		$(this).hide();
		intro.prepend('.content-container', 'nav-template', data.nav);
		intro.render('.padded-content', 'welcome-template', data.nav);
		
		var categories = ["about", "work", "portfolio", "contact"];

		for ( var i = 0; i < categories.length; i++) {
			let category = categories[i];
			$('.' + category).click(function(){
				$('.content').removeClass('about portfolio work contact');
				$('.nav-vertical').removeClass('about portfolio work contact');
				$('.'+category+'-nav-div .nav-vertical').addClass(''+category);
				setTimeout(function(){
					$('.content').addClass(''+category);
					intro.render('.padded-content', category+'-template', data.nav);
				},300);
			})
		}
	});

		// $( '.about' ).click(function() {
		//   $('.content').addClass('about');
		// });


	// })

});

