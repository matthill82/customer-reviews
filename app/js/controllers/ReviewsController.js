'use strict';

reviewsApp.controller('ReviewsController',
	function RatingsController ($scope, reviewData) {

		reviewData.getReviews(function (event) {
			$scope.event = event;
		});

		$scope.myOrder = '-UserOverallRating';

			angular.forEach($scope.event, function(i,v){
		        console.log($scope.event.FOCUS13.ModelRecords.length);
	        });

////		$scope.sortorder = 'UserOverallRating';
//		$scope.dateTimeStamp = 'ReviewdateTimestamp';
//
//		//Contains the filter options
//        $scope.filterOptions = {
//            stores: [
//                {id : 5, name : 'Show All', rating: 5 },
//                {id : 1, name : 'Most Recent', rating: 1 },
//                {id : 2, name : 'Oldest', rating: 2 },
//                {id : 3, name : 'Lowest Rating', rating: 3 },
//                {id : 4, name : 'Highest Rating', rating: 4 }
//            ]
//        };
//
//        //Mapped to the model to filter
//        $scope.filterItem = {
//            store: $scope.filterOptions.stores[0]
//        }
//
//        //Custom filter - filter based on the UserOverallRating selected
//        $scope.customFilter = function (data) {
//	        angular.forEach($scope.event, function(i,v){
////		        console.log($scope.event.FOCUS13.ModelRecords.length);
//	        });
//        };
//	}
	});