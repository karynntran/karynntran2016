export function render(element, template, data) {
    $(element).html(tmpl(template, data));
}

export function prepend(element, template, data) {
    $(element).prepend(tmpl(template, data));
}

export function flipper(){
	$('.flipper').addClass('init-intro');
	$('.intro-text').addClass('init-intro');
	$('.start-icon').addClass('init-intro');
}

export function clicker(){
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
}



