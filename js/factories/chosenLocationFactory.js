gnarApp.factory('chosenLocationFactory',['$http', 'filterWeatherFactory', function($http, filterWeatherFactory){
  self = {};

  self.location = {};

  self.getMarineInfo = function(lat, long) {
    var key = 'key=13b7cf31eb9c40758b7144945162403';
    var url = '//api.worldweatheronline.com/premium/v1/marine.ashx?' + key + '&q=' + lat + ',' + long + '&tide=yes&format=json';
    return $http.get(url)
    .then(function(response) {
      var data = filterWeatherFactory.sortData(response.data.data.weather);
      return data;
    });
  };

  self.getForecast = function() {
    var key = 'key=13b7cf31eb9c40758b7144945162403';
    var url = '//api.worldweatheronline.com/premium/v1/marine.ashx?' + key + '&q=' + self.location.latitude + ',' + self.location.longitude + '&tide=yes&format=json';
    return $http.get(url);
  };

  return self;
}]);
