gnarApp.controller('webcamController',
['chosenLocationService', '$sce',
function(chosenLocationService, $sce) {
  var self = this;

  self.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }

  self.webcam = chosenLocationService.selectedLocation.webcam;

  if (self.webcam === null) {
    self.show = true;
  } else {
    self.show = false;
  };

}]);
