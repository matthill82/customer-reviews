'use strict';

custReviewApp.controller('RatingsController',
	function($scope, $http) {
		$http.get('http://wwwedu.rrp.ford.com/servlet/ContentServer?pagename=OwnerSurveyJSONExport&action=getOwnerSurveyData&locale=en_GBR').
			success(function(data, status, headers, config) {
				$scope.reviews = data;
			}).
			error(function(data, status, headers, config, $log) {
				$log.info(data, status, headers);
			})
	}
);