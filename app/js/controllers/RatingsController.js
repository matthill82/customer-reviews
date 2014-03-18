'use strict';

reviewsApp.controller('RatingsController',
	function RatingsController ($scope, ratingData) {
		$scope.sortorder = 'name';
		ratingData.getRatings(function (event) {
            if(event.length){
                $scope.event = event;
            }
		});
	}
);

//reviewsApp.controller('ServiceController',
//    function($scope, reviewsService) {
//// We can call the events function
//// on the object
//        $scope.events =
//            reviewsService.events('auser');
//    });