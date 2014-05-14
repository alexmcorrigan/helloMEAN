angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .when('/employees', {
            templateUrl: 'views/employee.html',
            controller: 'EmployeeController'
        });

    $locationProvider.html5Mode(true);

}]);