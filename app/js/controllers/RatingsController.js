'use strict';

reviewsApp.controller('RatingsController',
	function RatingsController ($scope, ratingData) {
		$scope.sortorder = 'name';
		ratingData.getRatings(function (event) {
            if(event){
                $scope.event = event;
            }
		});
	}
);