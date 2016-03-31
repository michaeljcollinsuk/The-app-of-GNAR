/*jshint -W069 */

gnarApp.factory('filterWeatherFactory', function() {
  var HOURS = 7;

  return {
    sortData: sortData,
    deleteForecasts: deleteForecasts,
    setTabs: setTabs,
    date: date,
    hours: HOURS
  };

  function sortData(data) {
    deleteForecasts(data);
    var arr = [];
    for (var day in data) {
      var obj = {};
      obj['date'] = data[day].date;
      obj['hourly'] = data[day].hourly;
      if (data[day].tides === null) {
        obj['tides'] = undefined;
      } else {
      obj['tides'] = data[day].tides[0].tide_data;
      }
      arr.push(obj);
    }
    return arr;
  }
  function deleteForecasts(data) {
    for (var i = 0; i < HOURS; i++ ) {
      data[i].hourly.splice(0,2);
    }
    return data;
  }

  function setTabs(marineWeather) {
    var tabs = [{
              title: 'Today',
              url: 'one.tpl.html'
          }, {
              title: 'Tomorrow',
              url: 'two.tpl.html'
          }, {
              title: date(marineWeather[2].date),
              url: 'three.tpl.html'
          }, {
              title: date(marineWeather[3].date),
              url: 'four.tpl.html'
          }, {
              title: date(marineWeather[4].date),
              url: 'five.tpl.html'
          }, {
            title: date(marineWeather[5].date),
            url: 'six.tpl.html'
          }, {
            title: date(marineWeather[6].date),
            url: 'seven.tpl.html'
      }];
    return tabs;
  }


  function date(date) {
    array = date.match(/.{1,4}/g);
    return array.reverse().join('');
  }

  // self.time = function(time) {
  //   if (time.length === 3 ) return '0' + time;
  //   return time;
  // };


});
