define(['jquery', 'underscore', 'backbone', 'app/my.utils'], function($,_, Backbone, utils) {
	module = Backbone.View.extend({
		el: '#cytoSection',
		template: _.template($('#cytoView').html()),
		render: function() {
			console.log(this.$el)
			this.$el.html(this.template({'text': 'boa'}));
		},
		initialize: function() {
			this.render();
		}
	
	});
	/*
	var module = function(height, width, parent) {
		this.mainDivHeight  = height;
		this.mainDivWidth = width;
		this.parent = parent;
	};
	
	module.prototype.createMainDiv = function(height, width, parent) {
		var div = utils.createDiv(this.mainDivHeight, this.mainDivWidth);
		parent.append(div);
		this.mainDiv = div;
		return div;
	};
	module.prototype.init = function() {
		this.createMainDiv(this.mainDivHeight, this.mainDivWidth, this.parent);
		this.cy = this.mainDiv.cytoscape({

  
  style: [
    {
      selector: 'node',
      css: {
        'content': 'data(id)',
        'text-valign': 'center',
        'text-halign': 'center'
      }
    },
    {
      selector: '$node > node',
      css: {
        'padding-top': '10px',
        'padding-left': '10px',
        'padding-bottom': '10px',
        'padding-right': '10px',
        'text-valign': 'top',
        'text-halign': 'center'
      }
    },
    {
      selector: 'edge',
      css: {
        'target-arrow-shape': 'triangle'
      }
    },
    {
      selector: ':selected',
      css: {
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black'
      }
    }
  ],
  
  elements: {
    nodes: [
      { data: { id: 'a', parent: 'b' } },
      { data: { id: 'b' } },
      { data: { id: 'c', parent: 'b' } },
      { data: { id: 'd' } },
      { data: { id: 'e' } },
      { data: { id: 'f', parent: 'e' } }
    ],
    edges: [
      { data: { id: 'ad', source: 'a', target: 'd' } },
      { data: { id: 'eb', source: 'e', target: 'b' } }
      
    ]
  },
  
  layout: {
    name: 'cose',
    padding: 5
  }
});
	};
	var init = function(height, width, parent) {
		console.log("init");
		module.createMainDiv(height, width, parent);
		return module;
	};*/
	return module;
});