'use strict';

reviewsApp.controller('RatingsController',
	function RatingsController ($scope, ratingData) {
		$scope.sortorder = 'rating';
		ratingData.getRatings(function (ratings) {
			$scope.ratings = ratings;
		});
	}
);