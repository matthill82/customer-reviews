'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData) {
        $scope.sortorder = 'name';
        eventData.getRatings().then(
            function(event) {$scope.event = event; },
            function(statusCode) { console.log(statusCode);}
        );
    }
);

//function makeUrl ( url,pagename,params ) {
//	url+='?pagename='+pagename;
//	for (var param in params) {
//		if (params.hasOwnProperty(param)) {
//			console.log(params[param]);
//			console.log(params);
//			url+='&'+param+'='+params[param];
//		}
//	}
//	return url;
//}