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

requirejs(['cytoscape', 'jquery', 'underscore', 'backbone',  'app/cytoview'], function(cytoscape, $, _, backbone, myCyto) {
	
	var cyto = new myCyto();

});
