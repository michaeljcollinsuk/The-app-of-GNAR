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
    response = {swell_height: 1, swell_period: 3 };
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
      expect(ctrl.marineInfo).toEqual(response);
    });
  });
});
