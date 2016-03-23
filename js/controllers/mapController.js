gnarApp.controller("mapController", ['uiGmapGoogleMapApi', '$geolocation', 'MapFactory', 'apiService', function(uiGmapGoogleMapApi, $geolocation, MapFactory, apiService) {

  apiService.getBeaches().then(function(response){
    self.beachLocations = response;

    self.ids = [];

    for(i=0; i<self.beachLocations.length; i++){
      self.ids.push({id: self.beachLocations[i].id, coords: {latitude: self.beachLocations[i].latitude, longitude: self.beachLocations[i].longitude}})
    }

   });

  var self = this;

  self.factory = new MapFactory();



}]);
