gnarApp.service('locationsService', ['$http', function($http) {
  var self = this;

  this.getLocations = function() {
    return $http.get('http://localhost:3000/beaches');
  };
}]);
