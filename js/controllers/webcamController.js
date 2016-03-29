gnarApp.controller('webcamController',
['chosenLocationService',
function(chosenLocationService) {
  var self = this;

  self.webcam = chosenLocationService.selectedLocation.webcam;

  if (self.webcam === null) {
    self.show = true;
  } else {
    self.show = false;
  };

}]);
