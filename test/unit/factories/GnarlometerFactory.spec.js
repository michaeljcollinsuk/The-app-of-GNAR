describe('factory: GnarlometerFactory', function() {
  var gnarlometerFactory;

  beforeEach(module('GnarApp'));

  beforeEach(inject(function(GnarlometerFactory) {
    gnarlometerFactory = new GnarlometerFactory;
  }));

  it('can calculate the gnarly level', function() {
    expect(gnarlometerFactory.calculateGnar(28,11.5,7)).toBe(4);
  });
});
