'use strict';

reviewsApp.controller('SortController',
	function SortController ($scope, sortData) {
		sortData.getSort(function (sort) {
			$scope.sort = sort;
		});
	}
);