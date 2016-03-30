gnarApp.controller('locationController', ['WeatherApiFactory', 'chosenLocationService', 'MarineApiFactory', function(WeatherApiFactory, chosenLocationService, MarineApiFactory) {

  var self = this;

  self.oneDayForecast = true;
  self.sevenDayShow = false;

  self.location = chosenLocationService.selectedLocation;

  MarineApiFactory.getMarineInfo(self.location.latitude, self.location.longitude).then(function(response){
    self.marineWeather = response;
  });

  self.isLoaded = function() {
    return (typeof self.marineWeather !== 'undefined' );
  };

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

}]);
