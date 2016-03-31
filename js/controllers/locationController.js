gnarApp.controller('locationController', ['chosenLocationService', 'MarineApiFactory','filterWeatherFactory', 'forecast', function(chosenLocationService, MarineApiFactory, filterWeatherFactory, forecast) {

  var self = this;

  self.oneDayForecast = true;
  self.sevenDayShow = false;

  self.location = MarineApiFactory.location;

  self.marineWeather = filterWeatherFactory.sortData(forecast.data.data.weather);

  debugger

  // MarineApiFactory.getMarineInfo(self.location.latitude, self.location.longitude).then(function(response){
  //   self.marineWeather = response;
  //   // self.tabs = [{
  //   //           title: self.marineWeather[0].date,
  //   //           url: 'one.tpl.html'
  //   //       }, {
  //   //           title: self.marineWeather[1].date,
  //   //           url: 'two.tpl.html'
  //   //       }, {
  //   //           title: self.marineWeather[2].date,
  //   //           url: 'three.tpl.html'
  //   //       }, {
  //   //           title: self.marineWeather[3].date,
  //   //           url: 'four.tpl.html'
  //   //       }, {
  //   //           title: self.marineWeather[4].date,
  //   //           url: 'five.tpl.html'
  //   //       }, {
  //   //         title: self.marineWeather[5].date,
  //   //         url: 'six.tpl.html'
  //   //       }, {
  //   //         title: self.marineWeather[6].date,
  //   //         url: 'seven.tpl.html'
  //   //   }];
  // });

  self.tabs = function() {
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
      return self.tabs;
  };

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
