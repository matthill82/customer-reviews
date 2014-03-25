// ratings service
ngReviews.factory('ratingData', function ($http) {
	return {
		getRatings : function (successcb) {
			$http({method : 'GET', url : 'json/RatingsData.json' }).
				success(function (data, status, headers, config) {
					successcb(data);
				}).
				error(function (data, status, headers, config) {
					$log.warn(data, status, headers, config);
				});
		}
	};
});

// this will be the live service
//ngReviews.factory('reviewsService', function($http) {
//        var rrpbUrl = '';
//        var runrRequest = function(username, path) {
//// Return the promise from the $http service
//// that calls the RRP API using JSONP
//            return $http({
//                method: 'JSONP',
//                url: rrpbUrl + '/users/' +
//                    username + '/' +
//                    path + '?callback=JSON_CALLBACK'
//            });
//        }
//// Return the service object with a single function
//// events
//        return {
//            events: function(username) {
//                return runRequest(username, 'events');
//            }
//        };
//    });