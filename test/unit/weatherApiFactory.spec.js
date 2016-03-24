describe('factory: weatherApiFactory', function() {
  var weatherFactory;
  var long;
  var lat;


  beforeEach(module('GnarApp', function ($routeProvider) {
      $routeProvider.otherwise(function(){return false;});
  }));

  beforeEach(inject(function(WeatherApiFactory) {
    weatherFactory = new WeatherApiFactory();
  }));

  describe('making a request to Open Weather Api', function() {

    var result = {wind: 9, temp: 10 };

    var httpBackend;
    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend;
      long = -4.55064;
      lat = 50.8305;
      var key = '&appid=2c2eacccda9dcbe936dee48b6353bab0';
      var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&units=metric' + key;
      httpBackend
        .expectGET(url)
        .respond(result);
    }));

    it('makes a call to the open weather api', function() {
      weatherFactory.getWeather(long, lat, function(data) {
        expect(data).toEqual(result);
      });
      httpBackend.flush();
    });

    it('returns the wind', function() {
      weatherFactory.getWeather(long, lat, function(data) {
        expect(data.wind).toEqual(result.wind);
      });
      httpBackend.flush();
    });

    it('returns the wind', function() {
      weatherFactory.getWeather(long, lat, function(data) {
        expect(data.temp).toEqual(result.temp);
      });
      httpBackend.flush();
    });

  });

});
