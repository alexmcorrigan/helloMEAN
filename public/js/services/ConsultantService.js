angular.module('ConsultantService', []).factory('Consultant', ['$http', function($http) {
    return {
        get : function() {
            return $http.get('/api/consultants');
        },

        create : function(consultantData) {
            return $http.post('/api/consultants', consultantData);
        },

        delete : function(id) {
            return $http.delete('/api/consultants' + id);
        }
    }
}]);