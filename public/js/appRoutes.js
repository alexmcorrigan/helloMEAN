angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .when('/supportStaff', {
            templateUrl: 'views/supportStaff.html',
            controller: 'SupportStaffController'
        })

        .when('/consultants', {
            templateUrl: 'views/consultant.html',
            controller: 'ConsultantController'
        });

    $locationProvider.html5Mode(true);

}]);