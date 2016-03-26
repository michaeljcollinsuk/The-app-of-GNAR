gnarApp.factory('MarineApiFactory',['$http', function($http){
  var marineApiFactory = function() {};

  marineApiFactory.prototype.getMarineInfo = function(lat, long) {
    var key = 'key=13b7cf31eb9c40758b7144945162403';
    var url = 'http://api.worldweatheronline.com/premium/v1/marine.ashx?' + key + '&q=' + lat + ',' + long + '&tide=yes&format=json';
    return $http.get(url)
    .then(function(response) {
      return response.data.data;
    });
  };

  return marineApiFactory;
}]);



// http://api.worldweatheronline.com/premium/v1/marine.ashx?key=13b7cf31eb9c40758b7144945162403&q=50.8305,-4.55064&tide=yes&format=json

// http://api.worldweatheronline.com/premium/v1/marine.ashx?key=13b7cf31eb9c40758b7144945162403&?=50.8305,-4.55064&tide=yes&format=json

// http://api.worldweatheronline.com/premium/v1/marine.ashx?key=13b7cf31eb9c40758b7144945162403&q=50.8305,-4.55064&tide=yes&format=json
