'use strict';

ngReviews.controller('ReviewsController', ['$scope', 'reviewData',
	function RatingsController ($scope, reviewData) {

		$scope.myOrder = 'ReviewdateTimestamp';
		$scope.currentPage = 0;
		$scope.pageSize = 10;

		reviewData.getReviews(function (event) {
			if(event) {
				$scope.event = event;
				angular.forEach($scope.event, function(i,v) {
					var reviews = i.ModelRecords,
						reviewLength = reviews.length;

				});

			}

			$scope.numberOfPages = function() {
				return Math.ceil(reviewLength/$scope.pageSize);
			};

		});

	}]);

//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
ngReviews.filter('startFrom', function(input) {
	return function(input, start) {
		console.log(input, start);
		start = +start; //parse to int
		return input.slice(start);
	}
});