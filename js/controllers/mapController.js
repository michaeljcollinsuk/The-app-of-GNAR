gnarApp.controller("mapController", ['uiGmapGoogleMapApi', '$geolocation', 'MapFactory', 'apiService', 'WeatherApiFactory', 'chosenLocationService', function(uiGmapGoogleMapApi, $geolocation, MapFactory, apiService, WeatherApiFactory, chosenLocationService) {
  var weatherApiFactory = new WeatherApiFactory();
  apiService.getBeaches().then(function(response){
    self.beachLocations = response;
    self.ids = [];

    for(var i=0; i<self.beachLocations.length; i++){

      self.ids.push(
        {id: self.beachLocations[i].id,
        name: self.beachLocations[i].name,
        weather: {},
        coords: {latitude: self.beachLocations[i].latitude, longitude: self.beachLocations[i].longitude}
        }
      )};

   });

  var self = this;

  self.factory = new MapFactory();

  self.getWeather = function(id, coords) {
    weatherApiFactory.getWeather(coords.longitude, coords.latitude).then(function(response){
      for(i=0; i < self.ids.length; i++) {
        if(self.ids[i].id === id) {
          self.ids[i].weather = response;
        }
      }
    });
  };

  self.storeLocation = function(id) {
    for(i = 0; i < self.beachLocations.length; i++){
      debugger;
      if(self.beachLocations[i].id === id) {
        chosenLocationService.selectedLocation = self.beachLocations[i]
      }
    }
  };



}]);
