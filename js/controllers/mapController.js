gnarApp.controller("mapController", ['uiGmapGoogleMapApi', '$geolocation', 'MapFactory', function(uiGmapGoogleMapApi, $geolocation, MapFactory) {

  var self = this;

  self.factory = new MapFactory();

}]);
