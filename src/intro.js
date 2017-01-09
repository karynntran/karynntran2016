export function render(element, template, data) {
    $(element).html(tmpl(template, data));
}

export function prepend(element, template, data) {
    $(element).prepend(tmpl(template, data));
}

export function flipper(){
	$('.intro.flipper').addClass('init-intro');
	$('.intro-text').addClass('init-intro');
	$('.start-icon').addClass('init-intro');
}




