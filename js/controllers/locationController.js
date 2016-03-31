gnarApp.controller('locationController', ['chosenLocationFactory','filterWeatherFactory', 'forecast', function(chosenLocationFactory, filterWeatherFactory, forecast) {
  var self = this;
  self.location = chosenLocationFactory.location;
  self.marineWeather = filterWeatherFactory.sortData(forecast.data.data.weather);
  self.tabs = filterWeatherFactory.setTabs(self.marineWeather);

  self.isLoaded = function() {
    return (typeof self.marineWeather !== 'undefined' );
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
