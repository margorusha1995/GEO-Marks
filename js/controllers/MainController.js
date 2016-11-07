angular.module('Marks').controller("mainController", function ($scope) {
    var myMap;
    ymaps.ready(init);

    function init () {
        myMap = new ymaps.Map('map', {
            center: [20.76, 37.64],
            zoom: 10
        }, 
        {
            searchControlProvider: 'yandex#search'
        },
        {
            balloonMaxWidth: 200
        });
        $scope.map = myMap;
    };
    
          
});


