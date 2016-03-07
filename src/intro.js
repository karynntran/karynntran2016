export function render(element, template, data) {
    $(element).html(tmpl(template, data));
    console.log("working")
}

export function prepend(element, template, data) {
    $(element).prepend(tmpl(template, data));
    console.log("working")
}

export function flipper(){
	$('.flipper').addClass('init-intro');
	$('.intro-text').addClass('init-intro');
	$('.start').addClass('init-intro');
}

export function clicker(){
	var cat = data.nav;
	for (var i=0; i < cat.length; i++) {
		console.log(cat[i])
		$('.'+cat[i]).on('click', function(){
			console.log(cat[i]);
		});
	}
}



