/*jshint -W069 */

gnarApp.service('filterWeatherService', function() {
  var self = this;

  self.sortData = function(data) {
    self.deleteForecasts(data);
    var arr = [];
    for (var day in data) {
      var obj = {};
      obj['date'] = data[day].date;
      obj['hourly'] = data[day].hourly;
      obj['tides'] = data[day].tides[0].tide_data;
      arr.push(obj);
    }
    return arr;
  };


  self.deleteForecasts = function(data) {
    for (var i = 0; i < 7; i++ ) {
      data[i].hourly.splice(0,2);
    }
    return data;
  };


});
