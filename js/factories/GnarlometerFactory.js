gnarApp.factory('GnarlometerFactory', [function(){
var lat;
var long;
// var self = {}

  var GnarlometerFactory = function(long,lat) {
    long = long;
    lat = lat;
  };


  GnarlometerFactory.prototype.calculateGnar = function(wind,swell,period) {
    return 3;
  };


  return GnarlometerFactory;
}]);
