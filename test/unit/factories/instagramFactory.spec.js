describe('factory: instagramFactory', function() {
  var instagramFactory;

  beforeEach(module('GnarApp'));


  beforeEach(inject(function(_instagramFactory_) {
    instagramFactory = _instagramFactory_;
  }));

  it('can downcase capitalized names', function(){
    expect(instagramFactory.generateTag('Bude')).toBe('bude');
  });

  it('can join names together', function() {
    expect(instagramFactory.generateTag('Random Beach')).toBe('randombeach');
  });
});
