gnarApp.factory('geoLocationFactory',['$geolocation', 'MapFactory', function($geolocation, MapFactory){
  var geoLocationFactory = function() {
    var self = this;


  // self.mapFactory = new MapFactory();

  // return {
  //   getLocation: getLocation
  // };

  self.getLocation = function(factory) {
    $geolocation.getCurrentPosition()
    .then(function(location){
      factory.coords = location.coords;
      factory.loadMap(location.coords);
    });
  };
};

return geoLocationFactory;
}]);
