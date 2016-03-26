gnarApp.controller('locationController', ['WeatherApiFactory', 'chosenLocationService', 'MarineApiFactory', function(WeatherApiFactory, chosenLocationService, MarineApiFactory) {

  var self = this;
  self.oneDayForecast = true;
  self.sevenDayShow = false;
  var marineApiFactory = new MarineApiFactory();

  self.location = chosenLocationService.selectedLocation;

  var long = self.location.longitude;
  var lat = self.location.latitude;



  marineApiFactory.getMarineInfo(lat, long).then(function(response){
    self.marineWeather = response.weather;
    self.oneDayTideInfo = response.weather[0].tides;
  });

  self.showSevenDayForcast = function() {
    self.oneDayForecast = false;
    self.sevenDayShow = true;
  };

}]);
