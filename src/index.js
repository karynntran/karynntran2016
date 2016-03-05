import 'jquery';
import '../public/stylesheets/sass/style.scss';

tmpl.arg = 'data';

function render(element, template, data) {
    $(element).html(tmpl(template, data));
    console.log("working")
}


document.addEventListener("DOMContentLoaded", function (){
	console.log('ready');
	render('.test', 'test-template', data['hello']);

});

