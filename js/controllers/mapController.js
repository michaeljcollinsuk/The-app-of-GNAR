gnarApp.controller("mapController", function($scope, uiGmapGoogleMapApi, $geolocation) {
  var self = this;
  $geolocation.getCurrentPosition()
  .then(function(location){
    self.coords = location.coords;
  })
  .then(function(){
    uiGmapGoogleMapApi
    .then(function(maps) {
      $scope.map = { center: { latitude: self.coords.latitude, longitude: self.coords.longitude }, zoom: 8 };
    });
  });
});
