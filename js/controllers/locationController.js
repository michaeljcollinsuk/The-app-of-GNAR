gnarApp.controller('locationController', ['$http', 'apiService', function($http, apiService) {
  var self = this;


  apiService.getBeaches().then(function(response){ self.info = response });


}]);
