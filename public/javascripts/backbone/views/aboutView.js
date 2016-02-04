// import $ from 'jquery';
// import _ from 'lodash';

var AboutView = Backbone.View.extend({
	testEl: $('.left'),
	template: $('#test-template'),
	templateContent: _.template($('#test-template').html()),
	renderTest: function(){
		this.testEl.html(this.templateContent);		
		return this;
	}
});