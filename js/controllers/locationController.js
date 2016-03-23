gnarApp.controller('locationController', ['ApiFactory', '$routeParams', 'apiService',function(ApiFactory, $routeParams, apiService) {
  var self = this;


  apiService.getBeaches().then(function(response){
    self.chosenLocation = response[($routeParams.id)-1];
   });
  // self.factory = new ApiFactory();
  


}]);
