describe('locationController', function(){
  var ctrl;
  var marineApiFactoryMock;
  var weatherApiFactoryMock;
  var response;
  var $rootScope;

  beforeEach(module('GnarApp', function ($routeProvider) {
      $routeProvider.otherwise(function(){return false;});
  }));


  beforeEach(function() {
    response = {weather:[{tides:2}]};
    marineApiFactoryMock = function() {};
    marineApiFactoryMock.prototype.getMarineInfo = jasmine.createSpy('spy');
    module('GnarApp', {
      MarineApiFactory: marineApiFactoryMock
    });
  });

  beforeEach(inject(function($controller, $q, _$rootScope_) {
    marineApiFactoryMock.prototype.getMarineInfo.and.returnValue($q.when(response));
    ctrl = $controller('locationController');
    $rootScope = _$rootScope_;
  }));

  describe('interacting with the marineApiFactory', function() {
    it('initializes with marine info from the marineApiFactory', function() {
      $rootScope.$digest();
      expect(ctrl.marineWeather).toEqual(response.weather[0]);
      expect(ctrl.tideInfo).toEqual(response.weather[0].tides);
    });
  });
});
