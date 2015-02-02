define(['backbone', 'app/cytonode'], function(backbone, cytoNode) {
	var module = function() {
		backbone.on('request:data', this.onDataRequest);
	};
	
	module.prototype.onDataRequest = function(attributes){
		var model = attributes['model'];
		console.log(JSON.stringify(model));
		model.get('nodes').add(new cytoNode());
		
	};
	
	return module;
});