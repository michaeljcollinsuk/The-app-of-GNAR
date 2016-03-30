gnarApp.controller('locationController', ['WeatherApiFactory', 'chosenLocationService', 'MarineApiFactory', function(WeatherApiFactory, chosenLocationService, MarineApiFactory) {

  var self = this;
  var marineApiFactory = new MarineApiFactory();

  self.oneDayForecast = true;
  self.sevenDayShow = false;

  self.location = chosenLocationService.selectedLocation;

  marineApiFactory.getMarineInfo(self.location.latitude, self.location.longitude).then(function(response){
    self.marineWeather = response;
    self.tabs = [{
              title: self.marineWeather[0].date,
              url: 'one.tpl.html'
          }, {
              title: self.marineWeather[1].date,
              url: 'two.tpl.html'
          }, {
              title: self.marineWeather[2].date,
              url: 'three.tpl.html'
          }, {
              title: self.marineWeather[3].date,
              url: 'four.tpl.html'
          }, {
              title: self.marineWeather[4].date,
              url: 'five.tpl.html'
          }, {
            title: self.marineWeather[5].date,
            url: 'six.tpl.html'
          }, {
            title: self.marineWeather[6].date,
            url: 'seven.tpl.html'
      }];
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




    self.currentTab = 'one.tpl.html';

    self.onClickTab = function (tab) {
        self.currentTab = tab.url;
    }

    self.isActiveTab = function(tabUrl) {
       return tabUrl == self.currentTab;
   }






}]);
