angular.module('Marks').controller("RegistrationController", function ($scope, $http) {
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
        
        $('.map-loader').hide();
    };
    
    
    console.log('there');
    $scope.registrate = function(user, registrationForm) {
        if(registrationForm.$valid){
                console.log(user);
                alert(" ваш ответ сохранен");
            }
    }

    

});
