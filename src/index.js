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
	
	$('.intro-grid, .intro-text').on('click', function(){
		$(this).css('display', 'none');
		intro.prepend('.content-container', 'nav-template', data.nav);
		$('.content').addClass('about');
		$('.footer').addClass('about');
		$('.about-nav-div .nav-vertical').addClass('about');
		setTimeout(function(){
			intro.render('.padded-content', 'about-template', data.about);
			$('.intro-container').empty().off('click');
		},700);

		var categories = ["about", "work", "portfolio", "contact"];

		for ( var i = 0; i < categories.length; i++) {
			let category = categories[i];
			$('.' + category).click(function(){
				$('.nav-vertical').removeClass('about portfolio work contact');
				$('.footer').removeClass('about portfolio work contact');
				$('.'+category+'-nav-div .nav-vertical').addClass(''+category);
				setTimeout(function(){
					$('.content').removeClass('about portfolio work contact');
					$('.footer').addClass(''+category);
					$('.content').addClass(''+category);
					intro.render('.padded-content', category+'-template', data[category]);
				},300);
			})
		}
	});

});

