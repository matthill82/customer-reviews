'use strict';

reviewsApp.controller('RatingsController',
    function RatingsController($scope, eventData) {
        $scope.sortorder = 'name';
        eventData.getRatings().then(
            function(event) {$scope.event = event; },
            function(statusCode) { console.log(statusCode);}
        );
    }
);