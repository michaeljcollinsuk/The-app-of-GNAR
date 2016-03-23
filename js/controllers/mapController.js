gnarApp.controller("mapController", function($scope, uiGmapGoogleMapApi, $geolocation) {

  var self = this;

  $scope.options ={ styles: [
  {
    featureType: "all",
    stylers: [
      { saturation: -80 }
    ]
  },{
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      { hue: "#00ffee" },
      { saturation: 50 }
    ]
  },{
    featureType: "poi.business",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
]};

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
