gnarApp.controller('locationController', ['WeatherApiFactory', 'chosenLocationService', 'instagramService', '$scope', 'MarineApiFactory', function(WeatherApiFactory, chosenLocationService, instagramService, $scope, MarineApiFactory) {

  var self = this;
  self.oneDayForecast = true;
  self.sevenDayShow = false;
  // var weatherApiFactory = new WeatherApiFactory();
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


    // weatherApiFactory.getWeather(long, lat).then(function(response){
    //   self.weather = response;
    // });
    self.tag = instagramService.generateTag(self.location.name);
    instagramService.loadInstagram(self.tag);

}]);
