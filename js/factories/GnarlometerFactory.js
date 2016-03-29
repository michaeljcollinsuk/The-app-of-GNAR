gnarApp.factory('GnarlometerFactory', ['MarineApiFactory', function(MarineApiFactory){
var lat;
var long;

  var GnarlometerFactory = function(long,lat) {
    long = long;
    lat = lat;
  };
  var marineApiFactory = new MarineApiFactory();

  marineApiFactory.getMarineInfo(lat, long).then(function(response){
    self.marineWeather = response.weather;
    self.oneDayTideInfo = response.weather[0].tides;
    debugger;
  });

  return GnarlometerFactory;
}]);
