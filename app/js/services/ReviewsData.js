// reviews service
reviewsApp.service('reviewData', function ($http) {
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