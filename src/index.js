import 'jquery';
import * as intro from './intro.js';
import '../public/stylesheets/sass/style.scss';

tmpl.arg = 'data';

var sections = 5,
	sectionHeight,
	ypos,
	offset,
	sect;

var scrollPos = function(e){
	sectionHeight = $('.page').height()/sections;
	ypos = e.scrollY;
	offset = sectionHeight * .6; //px
	sect = Math.floor((ypos+offset)/sectionHeight);
	console.log(sectionHeight, ypos, sect)

	if(!$('.content').eq(sect).hasClass('active')){
		$('.content').removeClass('active').eq(sect).addClass('active');
		$('.active').addClass('init');
	}
}

var portfolioDrawer = function(){
	$('.drawer-bar, .arrow').on('click', function(){
		$('.drawer').toggleClass('collapsed');
		$('.arrow').toggleClass('collapsed');
	});
};


$(document).ready(function (){
	$('#app').addClass('on');

	intro.render('.intro-container', 'intro-template', data.landing.intro);
	setTimeout(function(){
		intro.flipper();
	},500)

	var categories = ["about", "skills", "work", "portfolio", "contact"];

	for ( var i = 0; i < categories.length; i++) {
		intro.render('.' + categories[i], categories[i]+'-template', data[categories[i]]);
	}

	setTimeout(function(){
		$(window).on('scroll', function(e){
			scrollPos(e.currentTarget);
		});
	},500)


	// $('.intro-grid, .intro-text').on('click', function(){
	// 	// $(this).css('display', 'none');
	// 	// intro.prepend('.content-container', 'nav-template', data.nav);
	// 	$('.content').addClass('about');
	// 	$('.footer').addClass('about');
	// 	$('.about-nav-div .nav-vertical').addClass('about');
		// setTimeout(function(){
		// 	intro.render('.padded-content', 'about-template', data.about);
		// },700);
		// $('.intro-grid, .intro-text').empty().off();



			// let category = categories[i];
			// $('.' + category+'-nav-div').click(function(){
			// 	$('.nav-vertical').removeClass('about portfolio work contact');
			// 	$('.footer').removeClass('about portfolio work contact');
			// 	$('.'+category+'-nav-div .nav-vertical').addClass(''+category);
			// 	setTimeout(function(){
			// 		$('.content').removeClass('about portfolio work contact');
			// 		$('.footer').addClass(''+category);
			// 		$('.content').addClass(''+category);
			// 		intro.render('.padded-content', category+'-template', data[category]);
			// 		portfolioDrawer();
			// 	},300);
			// })
	// });


});

