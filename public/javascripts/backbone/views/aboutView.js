import $ from 'jquery';
import _ from 'underscore';
// import * as __ from 'lodash';
// import 'lodash-es';
import Backbone from 'backbone';

var AboutView = Backbone.View.extend({
	
	el: $('left'),
	templateContent: _.template($('#test-template').html()),
	initialize: function(){
    	alert("ugh");
  	}
	// $(el).html(template)
	// testEl: $('.left'),
	// templateContent: _.template($('#test-template'))
	// // renderTest: function(){
	// // 	this.testEl.html(this.templateContent);		
	// // 	return this;
	// // }
});