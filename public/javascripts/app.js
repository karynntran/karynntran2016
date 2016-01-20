var categories = ["home", "about", "portfolio", "experience", "contact"]

document.addEventListener("DOMContentLoaded", function (){
	$('#intro').addClass('animate');

	for (var i in categories) {
	  	$('#'+categories[i]).click(function(){
	  		console.log(categories[i])
	  	});
	}
})