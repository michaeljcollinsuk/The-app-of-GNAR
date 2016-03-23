gnarApp.controller('locationController', ['ApiFactory', '$routeParams', 'apiService',function(ApiFactory, $routeParams, apiService) {
  var self = this;


  apiService.getBeaches().then(function(response){
    self.chosenLocation = response[($routeParams.id)-1];
   });
  // self.factory = new ApiFactory();
  // self.factory.getInfo().then(function(response){
  //   self.chosenLocation = response[($routeParams.id)-1];
  // });


   // self.factory = new ApiFactory();
    // setTimeout (function(){
      // self.chosenLocation = self.factory.info[0];

    // },1000);





}]);
