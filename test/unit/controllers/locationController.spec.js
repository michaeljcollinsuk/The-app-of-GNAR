describe('locationController', function(){
  var ctrl;
  var marineApiFactoryMock;
  var response;

  beforeEach(module('GnarApp', function() {}));

  beforeEach(function() {
    response = {swell_height: 1, swell_period: 3 };
    marineApiFactoryMock = jasmine.createSpyObj('MarineApiFactoryMock', ['getMarineInfo']);
  });

  beforeEach(inject(function($controller) {
    ctrl = $controller('locationController');
  }));

  describe('interacting with the marineApiFactory', function() {
    it('initializes with marine info from the marineApiFactory', function() {
      expect(ctrl.marineInfo).toEqual(response);
    });
  });
});
