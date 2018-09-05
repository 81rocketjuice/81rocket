/*--------------------------------------------------------------------------*
 *  rollover
 *--------------------------------------------------------------------------*/

jQuery.fn.rollover = function(suffix) {
	suffix = suffix || '_on';
	return this.not('[src*="'+ suffix +'."]').each(function() {
		var img = jQuery(this);
		var src = img.attr('src');
		var _on = [
			src.substr(0, src.lastIndexOf('.')),
			src.substring(src.lastIndexOf('.'))
		].join(suffix);
		jQuery('<img>').attr('src', _on);
		img.hover(
			function() { img.attr('src', _on); },
			function() { img.attr('src', src); }
		);
	});
};

jQuery(function($) {
	$('a.on img').rollover();
	$('form input:image').rollover();
	$('button img').rollover();
});


