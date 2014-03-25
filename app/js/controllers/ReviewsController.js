'use strict';

ngReviews.controller('ReviewsController', ['$scope', 'reviewData',
	function RatingsController ($scope, reviewData) {

		$scope.myOrder = 'ReviewdateTimestamp';

		$scope.currentPage = 0;
		$scope.pageSize = 10;
		$scope.data = [];
		$scope.numberOfPages = function() {
			return Math.ceil($scope.reviewData.length/$scope.pageSize);
		};

		reviewData.getReviews(function (event) {
			if(event) {
				$scope.event = event;
//				$scope.pagination = Pagination.getNew(10);
//				$scope.pagination.numPages = Math.ceil($scope.event.length/$scope.pagination.perPage);

//				angular.forEach($scope.event, function(i,v) {
//					var reviews = i.ModelRecords,
//						reviewLength = reviews.length;
//					console.log(reviewLength);
//				});

			}
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


	}]);