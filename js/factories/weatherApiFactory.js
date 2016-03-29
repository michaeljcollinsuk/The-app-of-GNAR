gnarApp.factory('WeatherApiFactory',['$http', function($http) {
  var WeatherApiFactory = function() {};

  var key = '&appid=2c2eacccda9dcbe936dee48b6353bab0';

  WeatherApiFactory.prototype.getWeather = function(long, lat) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&units=metric' + key;
    return $http.get(url)
    .then(function(response){
      return response.data;
    });
  };

  return WeatherApiFactory;
}]);
