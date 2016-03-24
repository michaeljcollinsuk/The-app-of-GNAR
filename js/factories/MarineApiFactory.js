gnarApp.factory('MarineApiFactory',['$http', function($http){
  var marineApiFactory = function() {};

  marineApiFactory.prototype.getMarineInfo = function(lat, long) {
    var key = 'key=13b7cf31eb9c40758b7144945162403';
    var url = 'http://api.worldweatheronline.com/premium/v1/marine.ashx?' + key + '&?=' + lat + ',' + long + '&tide=yes&format=json';
    return $http.get(url)
    .then(function(response) {
      return response.data;
    });
  };

  return marineApiFactory;
}]);
