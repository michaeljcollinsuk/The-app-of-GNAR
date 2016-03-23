gnarApp.controller('locationController', ['ApiFactory', 'WeatherApiFactory', '$routeParams', 'apiService', '$http' ,function(ApiFactory, WeatherApiFactory, $routeParams, apiService, $http) {
  var self = this;
  var weatherApiFactory = new WeatherApiFactory();

  apiService.getBeaches().then(function(response){

    self.chosenLocation = response[($routeParams.id)-1];

    var long = self.chosenLocation.longitude;
    var lat = self.chosenLocation.latitude;

    weatherApiFactory.getWeather(long, lat).then(function(response){
      self.weather = response;
    });

   });



}]);
