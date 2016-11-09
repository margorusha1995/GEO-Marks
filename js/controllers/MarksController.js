angular.module('Marks').controller("MarksController", function ($scope, $http, $interval) {
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
            
            $('.alert').addClass('alert-success');
            $('.alert').removeClass('alert-warning');
        }        
    };
    
    $scope.fileNameChanged = function (ele) {
        $scope.mark.image = ele.files[0];
    }
    
    $scope.createMark = function (mark, createMarkForm){
        if (!myPlacemark) {
            alert('Укажите местоположение, поставив маркер на карту');
        }
            if(createMarkForm.$valid && myPlacemark){
                var info = {
                  title: $scope.mark.title,
                  note: $scope.mark.note,
                  image: $scope.mark.image,
                  status: $scope.mark.status,
            };
                console.log(info);
                alert(" ваш ответ сохранен");
            }
        };
    
 


});
