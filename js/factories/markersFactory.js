gnarApp.factory('markersFactory',['apiFactory', function(apiFactory){
  var self = {};

  self.assignIds = function(locations) {
    self.allIds = locations.map(function(location){
      return {id: location.id,
      name: location.name,
      weather: {},
      coords: {latitude: location.latitude, longitude: location.longitude}
      };
    });
  };

  self.getIds = function(){
    return self.allIds;
  };

  return self;

}]);
