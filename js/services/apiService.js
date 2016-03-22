gnarApp.service('apiService',['$http', function($http) {
  var self = this;

  self.getBeaches = function() {
    return $http.get('http://localhost:3000/beaches')
    .then(function(response){
      return response.data;
    });
  };
}]);
