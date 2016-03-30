describe('factory: MarineApiFactory', function() {
  var marineFactory;
  var filterWeatherServiceMock;
  var long;
  var lat;

  beforeEach(module('GnarApp'));

  beforeEach(function(){
    filterWeatherServiceMock = jasmine.createSpyObj(
      'filterWeatherService',
      ['deleteForecasts']
    );


    module('GnarApp',{
      filterWeatherService: filterWeatherServiceMock
    });
    inject(function(MarineApiFactory){
      marineFactory = MarineApiFactory();
    });
    // $routeProvider
    // $routeProvider.otherwise(function(){return false;});
  });




  // inject(function(MarineApiFactory) {
  //   marineFactory = MarineApiFactory;
  // }));


  xit('has a getMarineInfo function', function() {
    expect(marineFactory.getMarineInfo()).toBeDefined();
  });


  describe('making a request to Marine Weather Api', function(){

    var result = {swell_height: 1, swell_period: 3 };

    var httpBackend;
    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend;
      long = -4.55064;
      lat = 50.8305;
      var key = 'key=13b7cf31eb9c40758b7144945162403';
      var url = 'http://api.worldweatheronline.com/premium/v1/marine.ashx?'+ key + '&q=' + lat + ',' + long + '&tide=yes&format=json';
      httpBackend
        .expectGET(url)
        .respond(result);
    }));

    xit('returns a response from the weather api', function() {
      marineFactory.getMarineInfo(lat, long, function(data) {
        spyOn(filterWeatherServiceMock);
        expect(filterWeatherServiceMock.deleteForecasts).toHaveBeenCalled();
      });
    });
  });

});
