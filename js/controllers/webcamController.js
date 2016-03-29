gnarApp.controller('webcamController',
['chosenLocationService',
function(chosenLocationService) {
  var self = this;
  self.webcam = chosenLocationService.selectedLocation.webcam;
  


}]);
