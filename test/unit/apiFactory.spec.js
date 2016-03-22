describe('factory: ApiFactory', function() {
  var apiFactory;

  beforeEach(module('GnarApp'));

  beforeEach(inject(function(ApiFactory) {
    apiFactory = new ApiFactory();
  }));

  describe('making a request to the rails api', function() {

    var result = [{
      name: 'Bude',
      longitude: -4.55064,
      latitude: 50.8305
    },
    {
      name: 'Boobys Bay',
      longitude: -5.0261,
      latitude: 50.5384
    }];

    var httpBackend;
    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend;
      var url = 'http://localhost:3000/beaches';
      httpBackend
        .expectGET(url)
        .respond(result);
    }));

    it('returns the name of the beach', function() {
        httpBackend.flush();
        expect(apiFactory.info).toEqual(result);
    });

  });



});
