gnarApp.factory('MarineApiFactory',['$http', 'filterWeatherService', function($http, filterWeatherService){
  var marineApiFactory = function() {};


  marineApiFactory.prototype.getMarineInfo = function(lat, long) {
    var key = 'key=13b7cf31eb9c40758b7144945162403';
    var url = 'http://api.worldweatheronline.com/premium/v1/marine.ashx?' + key + '&q=' + lat + ',' + long + '&tide=yes&format=json';
    return $http.get(url)
    .then(function(response) {
      var data = response.data.data.weather;
      filterWeatherService.sortData(data);
      return data;
    });
  };



  return marineApiFactory;
}]);
