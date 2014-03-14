// reviews service
reviewsApp.factory('reviewData', function ($http) {
	return {
		getReviews : function (successcb) {
			$http({method : 'GET', url : 'json/ReviewsData.json' }).
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
//reviewsApp.factory('reviewData', function($http, $q) {
//	return {
//		getReviews: function(vehicleCode) {
//			var deferred = $q.defer();
//
//			$http({method: 'GET', url: '/json/ReviewData', vehicleCode : vehicleCode}).
//				success(function(data, status, headers, config) {
//					deferred.resolve(data);
//				}).
//				error(function(data, status, headers, config) {
//					deferred.reject(status);
//				});
//			return deferred.promise;
//		}
//	};
//});