gnarApp.factory('markersFactory',['apiFactory', function(apiFactory){
  var self = {};

  self.assignIds = function(locations) {
    self.allIds = [];
    for(var i=0; i < locations.length; i++){
      self.allIds.push(
        {id: locations[i].id,
        name: locations[i].name,
        weather: {},
        coords: {latitude: locations[i].latitude, longitude: locations[i].longitude}
      });
    }
  };

  self.getIds = function(){
    return self.allIds;
  };

  return self;

}]);
