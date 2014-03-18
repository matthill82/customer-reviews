'use strict';

// star rating custom directive
reviewsApp.directive('starRating', function(){
	return {
		restrict: 'A',
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

reviewsApp.directive('animate', function() {
    return {
        require: '?ngModel',
        link: function(scope, element, attrs, ngModel) {
            if (!ngModel) return;
            ngModel.$render = function() {
                element.html(
                    ngModel.$viewValue() || 'None'
                );
            }
        }
    };
});

//reviewsApp.directive('animate', function() {
//    return {
//        restrict: 'E',
//        link: function (scope, attrs, elem) {
//            var amount = attrs.value;
//
//            attrs.$observe('value', function (value) {
//                var data = value;
//            })
//        }
//    }
//});

