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

reviewsApp.directive('ngbkFocus', function() {
	return {
		restrict : 'A',
		link : function(scope, element, attrs, controller) {
			scope.$watch(attrs.value, function(value) {
				element.text(value);
				element[0].focus();
			});
		}
	};
});

