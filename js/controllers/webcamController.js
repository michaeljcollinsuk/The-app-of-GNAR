gnarApp.controller('webcamController',
['chosenLocationFactory', '$sce',
function(chosenLocationFactory, $sce) {
  var self = this;

  self.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  };

  self.webcam = chosenLocationFactory.location.webcam;

  if (self.webcam === null) {
    self.show = true;
  } else {
    self.show = false;
  }

}]);
