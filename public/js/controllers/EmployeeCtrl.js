angular.module('EmployeeCtrl', []).controller('EmployeeController', function($scope, $http) {

    $http.get('api/employees')
        .success(function(data) {
            $scope.employees = data;
        })

        .error(function (data) {
            console.log('ERROR: ' + data);
        });

    $scope.tagline = 'Employee';
});