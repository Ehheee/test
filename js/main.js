requirejs.config({
    baseUrl: 'js/',
    paths: {
		lib: 'lib',
        app: 'app'
    },
	shim: {
		'lib/flot': {
			deps: ['jquery'],
			exports: 'jQuery.plot'
		
		},
		'lib/flot.navigate': {
			deps: ['lib/flot']
		}
	}
});

requirejs(['cytoscape', 'jquery', 'underscore', 'backbone',  'app/cytoview', 'app/dataprovider', 'app/cytonodecollection', 'app/cytonode', 'app/cytomodel'], function(cytoscape, $, _, backbone, myCyto, dataprovider, cytonodecollection, cytonode, cytomodel) {
	var dataprovider = new dataprovider();
	var c = new cytomodel();
	console.log(JSON.stringify(c));
	var cyto = new myCyto({model: c});

});
