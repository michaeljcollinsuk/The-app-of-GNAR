gnarApp.controller("mapController", ['MapFactory', 'apiFactory', 'GnarlometerFactory', 'chosenLocationFactory', 'markersFactory', 'locations', function(MapFactory, apiFactory, GnarlometerFactory, chosenLocationFactory, markersFactory, locations) {
  var self = this;

  self.locations = locations.data;
  markersFactory.assignIds(self.locations);
  self.ids = markersFactory.allIds;
  self.mapFactory = new MapFactory();

  self.getWeather = function(id, coords) {
    chosenLocationFactory.getMarineInfo(coords.latitude, coords.longitude).then(function(response){
      self.beach = self.ids[id-1];
      self.beachWeather = response[0].hourly[2];
      self.gnarLevel = GnarlometerFactory.calculateGnar(self.beachWeather.windspeedMiles, self.beachWeather.swellHeight_ft, self.beachWeather.swellPeriod_secs);
    });
    
  };

  self.storeLocation = function(id) {
    chosenLocationFactory.location = self.locations[id-1];
  };

  self.isLoaded = function() {
    return (typeof self.beach !== 'undefined' );
  };

}]);
