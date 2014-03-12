'use strict';

reviewsApp.controller('ReviewsController',
	function ReviewsController ($scope, reviewData) {
		$scope.sortorder = 'review';
		reviewData.getReviews(function (reviews) {
			$scope.reviews = reviews;
		});
	}
);