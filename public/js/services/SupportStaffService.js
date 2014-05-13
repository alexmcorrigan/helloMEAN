angular.module('SupportStaffService', []).factory('SupportStaff', ['$http', function($http) {
    return {
        get : function() {
            return $http.get('/api/supportStaff');
        },

        create : function(supportStaffData) {
            return $http.post('/api/supportStaff', supportStaffData);
        },

        delete : function(id) {
            return $http.delete('/api/supportStaff' + id);
        }
    }
}]);