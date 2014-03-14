// ratings service
reviewsApp.factory('ratingData', function ($http) {
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

// grab the http request, pass in the vehicleCode param
//reviewsApp.factory('ratingData', function($http, $q) {
//    return {
//	    getRatings: function(vehicleCode) {
//            var deferred = $q.defer();
//
//            $http({method: 'GET', url: '/json/RatingsData', vehicleCode : vehicleCode}).
//                success(function(data, status, headers, config) {
//                    deferred.resolve(data);
//                }).
//                error(function(data, status, headers, config) {
//                    deferred.reject(status);
//                });
//            return deferred.promise;
//        }
//    };
//});