angular.module('Marks').controller("MarksController", function ($scope, $http, $interval) {
     var myMap;  
    var myPlacemark;
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


        myMap.events.add('click', function (e) {
            var coords = e.get('coords');

            // Если метка уже создана – просто передвигаем ее.
            if (myPlacemark) {
                myPlacemark.geometry.setCoordinates(coords);
            }
            // Если нет – создаем.
            else {
                myPlacemark = createPlacemark(coords);
                myMap.geoObjects.add(myPlacemark);
                // Слушаем событие окончания перетаскивания на метке.
                myPlacemark.events.add('dragend', function () {
                    getAddress(myPlacemark.geometry.getCoordinates());
                });
            }

            getAddress(coords);
        });

        // Создание метки.
        function createPlacemark(coords) {
            return new ymaps.Placemark(coords, {
                iconCaption: ''
            }, {
                preset: 'islands#violetDotIconWithCaption',
                draggable: true
            });
        }

        // Определяем адрес по координатам (обратное геокодирование).
        function getAddress(coords) {
            myPlacemark.properties.set('iconCaption', '');
            ymaps.geocode(coords).then(function (res) {
            var firstGeoObject = res.geoObjects.get(0);

            myPlacemark.properties
                .set({
                    iconCaption: firstGeoObject.properties.get('name'),
                    balloonContent: firstGeoObject.properties.get('text')
                });
            });
        }        
    };
    $scope.createMark = function() {
      var info = {
          title: $scope.title,
          note: $scope.note,
          image: $scope.image,
          status: $scope.status,
      };  
        console.log(info);
    };
    
    $scope.fileNameChanged = function (ele) {
  var files = ele.files;
  var l = files.length;
  var namesArr = [];

  for (var i = 0; i < l; i++) {
    namesArr.push(files[i].name);
  }
        alert('thr');
}
    
 


});
