define(['backbone', 'app/cytonode'], function(backbone, cytonode) {
	var module = backbone.Collection.extend({
		model: cytonode,
		customshit: 'mycustomshit',
		initialize: function(){
			//console.log(cytonode);
		}
	});
	
	return module;
});