angular.module('EmployeeService', []).factory('Employee', ['$http', function($http) {
    return {
        get : function() {
            return $http.get('/api/employees');
        },

        create : function(employeeData) {
            return $http.post('/api/employees', employeeData);
        },

        delete : function(id) {
            return $http.delete('/api/employees' + id);
        }
    }
}]);