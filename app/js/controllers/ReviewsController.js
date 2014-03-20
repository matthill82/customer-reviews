'use strict';

reviewsApp.controller('ReviewsController',
	function RatingsController ($scope, reviewData) {
		$scope.sortorder = 'rating';
		reviewData.getReviews(function (event) {
			$scope.event = event;
		});
	}
);