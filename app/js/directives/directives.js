'use strict';

reviewsApp.directive('ngStars', function() {
	return {
		restrict : 'AE',
		scope : {
			text : '@myText'
		},
		link : function(scope, element, attrs, rating) {
			scope.$watch('value', function(newVal) {
				if(!newVal) {
					scope.setWidth();
				}
			}, true);
			console.log(element);
		}
	}
});

