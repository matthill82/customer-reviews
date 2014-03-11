reviewsApp.factory('reviewData', function ($http) {
	return {
		getEvent : function (successcb) {
			$http({method : 'GET', url : 'json/ReviewData.json' }).
				success(function (data, status, headers, config) {
					successcb(data);
				}).
				error(function (data, status, headers, config) {
					$log.warn(data, status, headers, config);
					console.log('error has occurred');
				});
		}
	};
});