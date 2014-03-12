'use strict';

reviewsApp.controller('RatingsController',
	function RatingsController ($scope, ratingData) {
		$scope.sortorder = 'rating';
		ratingData.getRatings(function (ratings) {
			$scope.ratings = ratings;
		});
	}
);

function makeUrl ( url,pagename,params ) {
	url+='?pagename='+pagename;
	for (var param in params) {
		if (params.hasOwnProperty(param)) {
			console.log(params[param]);
			console.log(params);
			url+='&'+param+'='+params[param];
		}
	}
	return url;
}