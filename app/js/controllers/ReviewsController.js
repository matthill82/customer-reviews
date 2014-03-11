'use strict';

reviewsApp.controller('ReviewsController',
	function RatingsController ($scope, reviewData) {
		$scope.sortorder = 'rating';
		reviewData.getEvent(function (event) {
			$scope.event = event;
		});
	}
);