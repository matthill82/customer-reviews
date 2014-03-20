'use strict';

reviewsApp.controller('SortController',
	function SortController ($scope, sortData) {

			// contains the sorting options
			$scope.sortOptions = {
				options : [
					{ id : 1, name : 'Most Recent' },
					{ id : 2, name : 'Oldest' },
					{ id : 3, name : 'Lowest Score' },
					{ id : 4, name : 'Highest' }
				]
			}

			// Mapped to the model to filter
			$scope.filterItem = {
				option : $scope.sortOptions.options[0]
			}

			// watch the sorting model - when it changes, change the
			// ordering of the sort
//			$scope.$watch('customFilter', function() {
//				console.log($scope.sortItem);
//				if($scope.filterItem.options.id === 1) {
//					$scope.reverse = true;
//				} else {
//					$scope.reverse = false;
//				}
//			}, true);

			//Custom filter - filter based on the rating selected
			$scope.customFilter = function (data) {
				if (data.modelRecord.UserOverallRating === $scope.filterItem.options.rating) {
					return true;
				} else if ($scope.filterItem.options.rating === 6) {
					return true;
				} else {
					return false;
				}
			};

	}
);
