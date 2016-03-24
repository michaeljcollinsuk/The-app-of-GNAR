// gnarApp.service('weatherApiService',['$http', function($http) {
//   var self = this;
//
//   self.getWeather = function(long, lat) {
//     var key = '&appid=2c2eacccda9dcbe936dee48b6353bab0';
//     var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&units=metric' + key;
//     return $http.get(url)
//     .then(function(response){
//       return response.data;
//     });
//   };
//
// }]);


// apiService.getBeaches().then(function(response){
//
//   self.chosenLocation = response[($routeParams.id)-1];
//
//   var long = self.chosenLocation.longitude;
//   var lat = self.chosenLocation.latitude;
//   weatherApiService.getWeather(long, lat).then(function(response) {
//     self.weather = response;
//   });
//
//  });
