gnarApp.controller("mapController", ['MapFactory', 'apiFactory', 'chosenLocationService', 'GnarlometerFactory', 'MarineApiFactory', 'markersFactory', 'locations', function(MapFactory, apiFactory, chosenLocationService, GnarlometerFactory, MarineApiFactory, markersFactory, locations) {
  var self = this;

  self.active = true;


  self.locations = locations.data;
  markersFactory.assignIds(self.locations);
  self.ids = markersFactory.allIds;
  self.mapFactory = new MapFactory();

  self.getWeather = function(id, coords) {
    MarineApiFactory.getMarineInfo(coords.latitude, coords.longitude).then(function(response){
      self.beach = self.ids[id-1];
      self.beachWeather = response[0].hourly[2];
      self.gnarLevel = GnarlometerFactory.calculateGnar(self.beachWeather.windspeedMiles, self.beachWeather.swellHeight_ft, self.beachWeather.swellPeriod_secs);
      self.active = false;
    });

  };

  self.storeLocation = function(id) {
    chosenLocationService.selectedLocation = self.locations[id-1];
  };

  self.isLoaded = function() {
    return (typeof self.beach !== 'undefined' );
  };

}]);
