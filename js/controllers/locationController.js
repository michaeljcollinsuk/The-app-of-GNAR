gnarApp.controller('locationController', ['MarineApiFactory','filterWeatherFactory', 'forecast', function(MarineApiFactory, filterWeatherFactory, forecast) {
  var self = this;
  self.oneDayForecast = true;
  self.sevenDayShow = false;
  self.location = MarineApiFactory.location;
  self.marineWeather = filterWeatherFactory.sortData(forecast.data.data.weather);
  self.tabs = filterWeatherFactory.setTabs(self.marineWeather);

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

  self.currentTab = 'one.tpl.html';

  self.onClickTab = function (tab) {
      self.currentTab = tab.url;
  };

  self.isActiveTab = function(tabUrl) {
     return tabUrl == self.currentTab;
 };

}]);
