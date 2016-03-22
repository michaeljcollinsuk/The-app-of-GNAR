gnarApp.controller('locationController', ['$http', 'ApiFactory', function($http, ApiFactory) {
  var self = this;

  self.factory = new ApiFactory();

}]);
