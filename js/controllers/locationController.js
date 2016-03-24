gnarApp.controller('locationController', ['WeatherApiFactory', 'chosenLocationService', 'MarineApiFactory', function(WeatherApiFactory, chosenLocationService, MarineApiFactory) {

  var self = this;
  var weatherApiFactory = new WeatherApiFactory();
  var marineApiFactory = new MarineApiFactory();

    self.location = chosenLocationService.selectedLocation;

    var long = self.location.longitude;
    var lat = self.location.latitude;



    marineApiFactory.getMarineInfo(lat, long).then(function(response){
      self.marineInfo = response;
    });


    weatherApiFactory.getWeather(long, lat).then(function(response){
      self.weather = response;
      console.log(self.weather)
    });

}]);
