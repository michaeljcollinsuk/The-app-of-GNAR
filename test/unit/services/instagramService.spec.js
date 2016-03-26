describe('service: instagramService', function() {
  var instagramService;

  beforeEach(module('GnarApp'));


  beforeEach(inject(function(_instagramService_) {
    instagramService = _instagramService_;
  }));

  it('can downcase capitalized names', function(){
    expect(instagramService.generateTag('Bude')).toBe('bude');
  });

  it('can join names together', function() {
    expect(instagramService.generateTag('Random Beach')).toBe('randombeach');
  });
});
