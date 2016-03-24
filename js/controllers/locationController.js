gnarApp.controller('locationController', ['WeatherApiFactory', 'chosenLocationService', function(WeatherApiFactory, chosenLocationService) {

  var self = this;
  var weatherApiFactory = new WeatherApiFactory();

    self.location = chosenLocationService.selectedLocation;

    var long = self.location.longitude;
    var lat = self.location.latitude;

    weatherApiFactory.getWeather(long, lat).then(function(response){
      self.weather = response;
    });

}]);
