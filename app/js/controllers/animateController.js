'use strict';

ngReviews.controller('AnimateController', function() {
	this.isHidden = false;
	this.showRating = function() {
		this.isHidden = !this.isHidden;
	}
});