'use strict';

// star rating custom directive
reviewsApp.directive('starRating', function(){
	return {
		restrict: 'E',
		link: function(scope){
			scope.click = function(starRating) {
				scope.starRating = starRating;
				scope.ratingChanged({newRating: starRating});
			};
			scope.$watch('starRating', function(oldVal, newVal) {
				if (newVal) {
					scope.stars = [];
					var starRating = scope.starRating;
					for(var i = 0; i < scope.maxStarRating; i++){
						scope.stars.push({empty:i >= starRating, index:i+1});
					}
				}
			});
		},
		scope: {
			starRating: "=",
			maxStarRating: "="
		}
	};
});

reviewsApp.directive('showRating', function($animate) {
	return function(scope, element, attrs) {
		scope.$watch(attrs.showRating, function(starValue, ratingVal) {
			if(ratingVal) {
				console.info(ratingVal);
			} else {
				console.info(ratingVal);
			}
		})
	}
});

