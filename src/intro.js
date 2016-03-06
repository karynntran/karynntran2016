export function render(element, template, data) {
    $(element).html(tmpl(template, data));
    console.log("working")
}

export function flipper(){
	$('.flipper').addClass('init-intro');
	$('.intro-text').addClass('init-intro');
	$('.start').addClass('init-intro');
}


