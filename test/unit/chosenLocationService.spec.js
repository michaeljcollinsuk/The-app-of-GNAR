describe('service: chosenLocationService', function() {

  var chosenLocation;

  beforeEach(module('GnarApp', function () {
  }));

  beforeEach(inject(function(chosenLocationService) {
    chosenLocation = chosenLocationService;
  }));

  describe('selectedLocation', function() {
    it('on initialises with an empty hash', function() {
      expect(chosenLocation.selectedLocation).toEqual({});
    });
  });


});
