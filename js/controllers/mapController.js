gnarApp.controller("mapController", ['uiGmapGoogleMapApi', '$geolocation', 'MapFactory', 'apiService', function(uiGmapGoogleMapApi, $geolocation, MapFactory, apiService) {

  apiService.getBeaches().then(function(response){
    self.beachLocations = response;
    // self.coords = {
    //   latitude: self.beachLocations[0].latitude,
    //   longitude: self.beachLocations[0].longitude
    // }
    self.ids = [];


    for(var i=0; i<self.beachLocations.length; i++){
      self.ids.push(
        {id: self.beachLocations[i].id,
        name: self.beachLocations[i].name,
        coords: {latitude: self.beachLocations[i].latitude, longitude: self.beachLocations[i].longitude}
        }
      )};

   });

  var self = this;

  self.factory = new MapFactory();

  self.onClick = function(marker, eventName, model) {
       self.show = !self.show;

   };



}]);
