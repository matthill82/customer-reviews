'use strict';

reviewsApp.controller('starsController',
	function starsController ($scope) {
		$scope.rating = 'rating';
		$scope.value = 'value';

		$scope.stars = function() {
			return angular.element(this).each(function() {
				angular.element(this).html(angular.element('<span />').width(Math.max(0, (Math.min(5, parseFloat($(this).html())))) * 60)); /* 49 is the width of the stars image */
			});
		}

		$scope.setWidth = function(attrs) {
			var ratingWidth = attrs || $scope.value;
			var findStars = angular.element('.starWidth');
			findStars.width(ratingWidth);
		}
	}
);