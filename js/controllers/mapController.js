gnarApp.controller("mapController", ['uiGmapGoogleMapApi', '$geolocation', 'MapFactory', 'apiService', 'chosenLocationService', 'GnarlometerFactory', 'MarineApiFactory', function(uiGmapGoogleMapApi, $geolocation, MapFactory, apiService, chosenLocationService, GnarlometerFactory, MarineApiFactory) {
  apiService.getBeaches().then(function(response){
    self.beachLocations = response;
    self.ids = [];
    self.show = false;

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


  var gnarlometer = new GnarlometerFactory();
  var marineApiFactory = new MarineApiFactory();

  self.getWeather = function(id, coords) {
    marineApiFactory.getMarineInfo(coords.latitude, coords.longitude).then(function(response){
      self.show = true;
      for(i=0; i < self.ids.length; i++) {
        if(self.ids[i].id === id) {
          self.beachName = self.ids[i].name;
          self.beachId = self.ids[i].id;
          self.temp = response.weather[0].hourly[4].tempC;
          self.windSpeed = response.weather[0].hourly[4].windspeedMiles;
          self.swellFeet = response.weather[0].hourly[4].swellHeight_ft;
          self.swellPeriod = response.weather[0].hourly[4].swellPeriod_secs;
        }
      }
      self.gnarLevel = gnarlometer.calculateGnar(self.windSpeed, self.swellFeet, self.swellPeriod);
    })
  };

  self.storeLocation = function(id) {
    for(i = 0; i < self.beachLocations.length; i++){
      if(self.beachLocations[i].id === id) {
        chosenLocationService.selectedLocation = self.beachLocations[i]
      }
    }
  };

}]);
