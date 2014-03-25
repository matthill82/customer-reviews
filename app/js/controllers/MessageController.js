'use strict';

ngReviews.controller('MessageController',
	function MessageController ($scope) {
		$scope.saySomething = function(scope, element, attr) {
			alert('clicked mo-foooooo');
		}
	});