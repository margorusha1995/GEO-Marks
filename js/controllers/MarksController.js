angular.module('Marks').controller("MarksController", function ($scope, $http) {
     var timer = setInterval(function() {
        if ($scope.map != undefined) {
            myMap = $scope.map;

            myMap.events.add('click', function (e) {
        
            });

            clearInterval(timer);
        } else {
            console.log('not ready');
        }
    }, 5000);
});
