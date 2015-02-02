define(['backbone', 'app/cytonodecollection'], function(backbone, cytoNodeCollection) {
	var module = backbone.Model.extend({
		defaults: {
			nodes: new cytoNodeCollection(),
			edges: []
		}
	});
	return module;
});