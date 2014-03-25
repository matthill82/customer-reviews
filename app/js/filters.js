'use strict';

//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
ngReviews.filter('startFrom', function() {
	return function(input, start) {
		console.log(input, start);
		start = +start; //parse to int
		return input.slice(start);
	}
});