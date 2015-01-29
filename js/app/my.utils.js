define(['jquery'], function($) {

	var module = function() {
	
	};
	module.prototype.createDiv = function(height, width, attributes, style) {
		style = style ? style : {};
		style['height'] = height;
		style['width'] = width;
		return $('<div />', attributes).css(style);
	};
	return new module();
});