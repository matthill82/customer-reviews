'use strict';

reviewsApp.controller('RatingsController',
	function RatingsController ($scope, ratingData) {
		$scope.sortorder = 'rating';
		ratingData.getEvent(function (event) {
			$scope.event = event;
		});
	}
);