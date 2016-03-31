gnarApp.controller('locationController', ['chosenLocationFactory','filterWeatherFactory', 'forecast', function(chosenLocationFactory, filterWeatherFactory, forecast) {
  var self = this;
  self.location = chosenLocationFactory.location;
  self.marineWeather = filterWeatherFactory.sortData(forecast.data.data.weather);
  self.tabs = filterWeatherFactory.setTabs(self.marineWeather);

  self.currentTab = 'one.tpl.html';

  self.onClickTab = function(tab) {
      self.currentTab = tab;
  };

  self.isActiveTab = function(tabUrl) {
     return tabUrl == self.currentTab;
  };

}]);
