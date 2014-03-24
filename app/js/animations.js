/**
 * Created by mhill168 on 21/03/2014.
 */
reviewsApp.animation('.my-switch-animation', function() {
	return {
		enter : function(element, done) {
			element = jQuery(element);
			element.css({
				position:'absolute',
				height:500,
				left:element.parent().width()
			});
			element.animate({
				left:0
			}, done);
		},

		leave : function(element, done) {
			element = jQuery(element);
			element.css({
				position:'absolute',
				height:500,
				left:0
			});
			element.animate({
				left:-element.parent().width()
			}, done);
		}
	};
});