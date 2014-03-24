'use strict';

reviewsApp.controller('ReviewsController',
	function RatingsController ($scope, reviewData) {

		reviewData.getReviews(function (event) {
			$scope.event = event;
		});

		$scope.sortorder = 'UserOverallRating';

//        //Contains the sorting options
//        $scope.sortOptions = {
//            stores : [
//                { id : 1, sortBy : 'Most Recent', UserOverallRating : 1 },
//                { id : 2, sortBy : 'Oldest', UserOverallRating:2 },
//                { id : 3, sortBy : 'Lowest Score', UserOverallRating:3 },
//                { id : 4, sortBy : 'Highest', UserOverallRating:4 }
//            ]
//        }

        //Contains the filter options
        $scope.filterOptions = {
            stores: [
                {id : 5, name : 'Show All', rating: 5 },
                {id : 1, name : 'Most Recent', rating: 1 },
                {id : 2, name : 'Oldest', rating: 2 },
                {id : 3, name : 'Lowest Rating', rating: 3 },
                {id : 4, name : 'Highest Rating', rating: 4 },

            ]
        };

        //Mapped to the model to filter
        $scope.filterItem = {
            store: $scope.filterOptions.stores[0]
        }

//        //Mapped to the model to sort
//        $scope.sortItem = {
//            store: $scope.sortOptions.stores[0]
//        };

        //Custom filter - filter based on the UserOverallRating selected
        $scope.customFilter = function (data) {
            if (data.UserOverallRating === $scope.filterItem.store.UserOverallRating) {
                return true;
            } else if ($scope.filterItem.store.rating === 5) {
                return true;
            } else {
                return false;
            }
        };
	}
);


reviewsApp.filter('reviews', function() {
	return function(review) {
		switch (review) {
			case 'Show All' :
				return "Show All";
			case 'Most Recent' :
				return "Most Recent"
		}
	};
});