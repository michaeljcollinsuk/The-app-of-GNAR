gnarApp.controller('locationController', ['$http', function($http) {
  var self = this;
  self.info = [];

  $http.get('http://localhost:3000/beaches').then(function(response){
    self.info = response.data;
  });
}]);
