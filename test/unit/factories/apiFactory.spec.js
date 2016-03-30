describe('factory: apiFactory', function() {
  var api;

  beforeEach(module('GnarApp', function ($routeProvider) {
      $routeProvider.otherwise(function(){return false;});
  }));

  beforeEach(inject(function(apiFactory) {
    api = apiFactory;
  }));

  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend;
    httpBackend.expectGET('http://localhost:3000/beaches').respond( {data: { name: 'Bude'}} );
  }));

  it('returns the name of the beach', function() {
    api.getBeaches().then(function(response) {
      expect(response.data.name).toEqual('Bude');
    });
    httpBackend.flush();
  });
});
