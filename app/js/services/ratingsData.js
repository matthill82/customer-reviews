reviewsApp.factory('ratingsData', function ($http) {
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