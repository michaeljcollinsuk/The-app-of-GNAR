describe('service: apiService', function() {
  var api;

  beforeEach(module('GnarApp'));

  beforeEach(inject(function(apiService) {
    api = apiService;
  }));

  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend;
    httpBackend.expectGET('http://localhost:3000/beaches').respond( {data: { name: 'Bude'}} );
  }));

  it('returns the name of the beach', function() {
    api.getBeaches().then(function(response) {
      expect(response.data.name).toEqual('Bude');
    });
    httpBackend.flush()
  });
});
