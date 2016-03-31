gnarApp.controller('webcamController',
['MarineApiFactory', '$sce',
function(MarineApiFactory, $sce) {
  var self = this;

  self.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  };

  self.webcam = MarineApiFactory.location.webcam;

  if (self.webcam === null) {
    self.show = true;
  } else {
    self.show = false;
  }

}]);
