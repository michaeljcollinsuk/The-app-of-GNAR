describe('factory: MapFactory', function() {
  var map;

  beforeEach(module('GnarApp', function($routeProvider) {
    $routeProvider.otherwise(function(){return false;});
  }));

  beforeEach(inject(function(MapFactory) {
    map = MapFactory;
  }));



});
