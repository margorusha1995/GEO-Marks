angular.module('Marks').controller("CircleController", function ($scope) {
<<<<<<< HEAD
    var myMap;
<<<<<<< HEAD
            var circle = {};
        var myCircle;
    $scope.switch = function() {
      console.log($scope.area); 
     myMap.geoObjects.remove(myCircle);
    };
    
    setTimeout(function(){
        myMap = $scope.map;

        
=======
    var circle = {};
    var myCircle;
    
    $scope.switch = function() {
      console.log($scope.area); 
     myMap.geoObjects.remove(myCircle);
    };
    
    var timer = setInterval(function() {
        if ($scope.map != undefined) {
            myMap = $scope.map;

>>>>>>> Filters
            myMap.events.add('click', function (e) {
                if ($scope.area) {
                     var coords = e.get('coords');
                    circle.x = coords[0];
                    circle.y = coords[1];


                    if(myCircle == undefined) {
                        myCircle = new ymaps.Circle([
                            [circle.x, circle.y],
                            $scope.radius
                        ], {
                            hintContent: "Подвинь меня"
                        }, {
                            draggable: true,
                            fillColor: "#DB709377",
                            strokeColor: "#990066",
                            strokeOpacity: 0.8,
                            strokeWidth: 5
                        });
                        myMap.geoObjects.add(myCircle);
                    } else {
                        myMap.geoObjects.remove(myCircle);
                        myCircle = new ymaps.Circle([
                            [circle.x, circle.y],
                            $scope.radius
                        ], {
                            hintContent: "Подвинь меня"
                        }, {
                            draggable: true,
                            fillColor: "#DB709377",
                            strokeColor: "#990066",
                            strokeOpacity: 0.8,
                            strokeWidth: 5
                        });

                        myMap.geoObjects.add(myCircle);
                    }
                }
            });

            clearInterval(timer);
        } else {
            console.log('not ready');
        }
    }, 5000);
    

    $scope.click = function() {
        console.log($scope.map);
    }
=======
//    var myMap;
//            var circle = {};
//        var myCircle;
//    $scope.switch = function() {
//      console.log($scope.area); 
//     myMap.geoObjects.remove(myCircle);
//    };
//    
//    setTimeout(function(){
//        myMap = $scope.map;
//
//        
//            myMap.events.add('click', function (e) {
//        var coords = e.get('coords');
//        circle.x = coords[0];
//        circle.y = coords[1];
//
//        
//        if(myCircle == undefined) {
//            myCircle = new ymaps.Circle([
//                [circle.x, circle.y],
//                $scope.radius
//            ], {
//                hintContent: "Подвинь меня"
//            }, {
//                draggable: true,
//                fillColor: "#DB709377",
//                strokeColor: "#990066",
//                strokeOpacity: 0.8,
//                strokeWidth: 5
//            });
//            myMap.geoObjects.add(myCircle);
//           
//        } else {
//             myMap.geoObjects.remove(myCircle);
//             myCircle = new ymaps.Circle([
//                [circle.x, circle.y],
//                $scope.radius
//            ], {
//                hintContent: "Подвинь меня"
//            }, {
//                draggable: true,
//                fillColor: "#DB709377",
//                strokeColor: "#990066",
//                strokeOpacity: 0.8,
//                strokeWidth: 5
//            });
//
//
//            myMap.geoObjects.add(myCircle);
//        }
//    });
//    }
//    , 5000);
//    
//    
//    $scope.click = function() {
//        console.log($scope.map);
//    }
>>>>>>> Note
});

