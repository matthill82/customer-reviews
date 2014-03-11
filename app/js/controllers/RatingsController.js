'use strict';

reviewsApp.controller('RatingsController',
	function RatingsController ($scope, reviewData) {
		$scope.event = reviewData.event;
	}
);