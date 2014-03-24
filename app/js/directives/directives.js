'use strict';
//
//reviewsApp.directive('ngStars', function() {
//	return {
//		restrict : 'AE',
//		scope : {
//			text : '@myText'
//		},
//		link : function(scope, element, attrs, rating) {
//			scope.$watch('value', function(newVal) {
//				if(!newVal) {
//					scope.setWidth();
//				}
//			}, true);
//			console.log(element);
//		}
//	}
//});

reviewsApp.directive('ngbkFocus', function($timeout) {
	return {
		restrict : 'A',
		link : function(scope, element, attrs, controller) {
			$timeout(function() {
				scope.$watch(attrs.value, function(value) {
					var testVal = $('.valueStar').data('value');
//					console.log(testVal, element);
					$('p.star_container').html('<span class="starsRating">'+parseFloat(testVal)+'</span>');
					$('span.starsRating').stars();

					$.fn.stars = function() {
						return $(this).each(function() {
							$(this).html($('<span />').width(Math.max(0, (Math.min(5, parseFloat($(this).html())))) * 47));
						});
					}

				});
			}, 1000);
		}
	};
});

reviewsApp.directive('clickMe', function($scope) {
	return {
		restrict : 'AE',
		priority : 100,
		link : function(scope, element, attr) {
			element.bind('click', function() {
				alert('clicked mo-foooooo');
				console.log(element);
			})
		}
	}
});

