gnarApp.controller("mapController", ['uiGmapGoogleMapApi', '$geolocation', 'MapFactory', function(uiGmapGoogleMapApi, $geolocation, MapFactory) {

  var self = this;

  self.factory = new MapFactory();

  self.ids = [
    {id: 1, coords: {latitude: 50.83, longitude: -4.55}},
    {id: 2, coords: {latitude: 52.83, longitude: -3.55}}
  ]

}]);
