'use strict';

ngReviews.controller('starsController',
	function starsController ($scope) {

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

function MessageController($scope) {
	$scope.message = { text : 'you clicked me' };

	$scope.clickFocus = function() {
		$scope.message.text = 'clicked again!!!';
	}
	$scope.clickUnFocus = function() {
		$scope.message.text = 'nope you did not clicked again!!!';
	}
}