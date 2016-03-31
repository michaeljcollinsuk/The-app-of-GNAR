gnarApp.factory('MarineApiFactory',['$http', 'filterWeatherFactory', 'chosenLocationService', function($http, filterWeatherFactory, chosenLocationService){
  self = {};

  self.location = {};
  self.lat = self.location.latitude;
  self.long = self.location.longitude;

  self.getMarineInfo = function(lat = self.location.latitude, long = self.location.longitude) {
    var key = 'key=13b7cf31eb9c40758b7144945162403';
    var url = 'http://api.worldweatheronline.com/premium/v1/marine.ashx?' + key + '&q=' + lat + ',' + long + '&tide=yes&format=json';
    return $http.get(url)
    .then(function(response) {
      var data = filterWeatherFactory.sortData(response.data.data.weather);
      return data;
    });
  };

  self.getForecast = function() {
    var key = 'key=13b7cf31eb9c40758b7144945162403';
    var url = 'http://api.worldweatheronline.com/premium/v1/marine.ashx?' + key + '&q=' + self.location.latitude + ',' + self.location.longitude + '&tide=yes&format=json';
    return $http.get(url);
  };

  return self;
}]);
