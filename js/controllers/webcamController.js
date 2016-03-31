gnarApp.controller('webcamController',
['chosenLocationFactory', '$sce',
function(chosenLocationFactory, $sce) {
  var self = this;

  self.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  };

  self.webcam = chosenLocationFactory.location.webcam;
  self.currentLocation = chosenLocationFactory.location;

  if (self.webcam === null) {
    self.show = true;
  } else {
    self.show = false;
  }

}]);
