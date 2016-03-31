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
    httpBackend.expectGET('http://localhost:3000/beaches').respond({data: { name: 'Bude'}});
  }));

  xit('returns the name of the beach', function() {
    api.getBeaches().then(function(response) {
      console.log(response)
      expect(response).toEqual( {data: { name: 'Bude'}});
    });
    httpBackend.flush();
  });
});
