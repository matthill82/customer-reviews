'use strict';

//reviewsApp.controller('ReviewsController',
//	function ReviewsController($scope, eventData) {
//		$scope.sortorder = 'review';
//		eventData.getReviews().then(
//			function(event) {$scope.event = event; },
//			function(statusCode) { console.log(statusCode);}
//		);
//	}
//);

reviewsApp.controller('ReviewsController',
	function RatingsController ($scope, reviewData) {
		$scope.sortorder = 'rating';
		reviewData.getReviews(function (event) {
			$scope.event = event;
		});
	}
);