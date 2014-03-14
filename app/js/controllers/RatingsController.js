'use strict';

//reviewsApp.controller('RatingsController',
//    function RatingsController($scope) {
//        $scope.sortorder = 'name';
//	    $scope.getRatings().then(
//            function(event) {$scope.event = event; },
//            function(statusCode) { console.log(statusCode);}
//        );
//    }
//);

reviewsApp.controller('RatingsController',
	function RatingsController ($scope, ratingData) {
		$scope.sortorder = 'rating';
		ratingData.getRatings(function (event) {
			$scope.event = event;
		});
	}
);