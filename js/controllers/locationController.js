gnarApp.controller('locationController', ['ApiFactory', '$routeParams', function(ApiFactory, $routeParams) {
  var self = this;

  if ($routeParams.id === 1) {
    self.chosenLocation = self.factory.info[$routeParams.id-1];
    debugger;
  }

  self.factory = new ApiFactory();


}]);
