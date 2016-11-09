angular.module('Marks').controller("SettingsController", function ($scope, $http) {
       var myMap;  
    var myPlacemark;
    ymaps.ready(init);

    function init () {
        myMap = new ymaps.Map('map', {
            center: [55.76, 37.64],
            zoom: 10
        }, 
        {
            searchControlProvider: 'yandex#search'
        },
        {
            balloonMaxWidth: 200
        });       
    };
    
    
    console.log('there');
    

});
