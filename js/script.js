angular.module('Marks', ['ngRoute'])
	.config( ['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/settings', {
				templateUrl: 'settings.html'
			})
            .when('/marks', {
				templateUrl: 'marks.html'
			})
			.when('/', {
                templateUrl: 'sign.html'
			});
	}]);

