gnarApp.controller('locationController', ['WeatherApiFactory', 'chosenLocationService', 'instagramService', '$scope', function(WeatherApiFactory, chosenLocationService, instagramService, $scope) {

  var self = this;
  var weatherApiFactory = new WeatherApiFactory();

    self.location = chosenLocationService.selectedLocation;

    var long = self.location.longitude;
    var lat = self.location.latitude;

    weatherApiFactory.getWeather(long, lat).then(function(response){
      self.weather = response;
    });

    instagramService.loadInstagram(self.location.name);

}]);
