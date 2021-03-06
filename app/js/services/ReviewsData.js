// reviews service
ngReviews.factory('reviewData', function ($http) {
	return {
		// pass in params
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