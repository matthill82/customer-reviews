'use strict';

reviewsApp.filter('reviews', function() {
	return function(reviews) {
		switch (reviews) {
			case 'Show All' :
				return "Show All";
			case 'Most Recent' :
				return "Most Recent"

		}
	}
})