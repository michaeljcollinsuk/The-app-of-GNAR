gnarApp.controller('locationController', ['WeatherApiFactory', 'chosenLocationService', 'MarineApiFactory', function(WeatherApiFactory, chosenLocationService, MarineApiFactory) {

  var self = this;
  self.oneDayForecast = true;
  self.sevenDayShow = false;
  var marineApiFactory = new MarineApiFactory();
  self.loaded = false;

  self.location = chosenLocationService.selectedLocation;

  var long = self.location.longitude;
  var lat = self.location.latitude;



  marineApiFactory.getMarineInfo(lat, long).then(function(response){
    self.marineWeather = response.weather;
    self.oneDayTideInfo = response.weather[0].tides;
    self.loaded = true;
    debugger
  });


  self.showSevenDayForcast = function() {
    self.oneDayForecast = false;
    self.sevenDayShow = true;
  };

  self.showOneDayForecast = function() {
    self.oneDayForecast = true;
    self.sevenDayShow = false;
  };

  self.time = function(time) {
    if (time.length === 3 ) return '0' + time;
    return time;
  };

  self.date = function(date) {
    array = date.match(/.{1,4}/g);
    return array.reverse().join('');
  };

  // self.deleteMidnight = function(response) {
  //
  //   return response;
  //   debugger
  // };


}]);
