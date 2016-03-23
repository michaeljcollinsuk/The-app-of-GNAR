gnarApp.controller('locationController', ['ApiFactory', '$routeParams', 'apiService', '$http' ,function(ApiFactory, $routeParams, apiService, $http) {
  var self = this;
  var long;
  var lat;
  var key;
  var url;


  apiService.getBeaches().then(function(response){
    self.chosenLocation = response[($routeParams.id)-1];
    long = self.chosenLocation.longitude;
    lat = self.chosenLocation.latitude;
    key = '&appid=2c2eacccda9dcbe936dee48b6353bab0';
    url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&units=metric' + key;
    $http.get(url)
     .then(function(response){
       self.weather = response.data;
     });
   });








}]);
