describe('factory: GnarlometerFactory', function() {
  var gnarlometerFactory;

  beforeEach(module('GnarApp'));

  beforeEach(inject(function(GnarlometerFactory) {
    gnarlometerFactory = new GnarlometerFactory;
  }));

  it('can calculate the gnarly level', function() {
    expect(gnarlometerFactory.calculateGnar(1,1,1)).toBe(3);
  });
});
