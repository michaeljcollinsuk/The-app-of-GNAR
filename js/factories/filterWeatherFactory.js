/*jshint -W069 */

gnarApp.factory('filterWeatherFactory', function() {

  return {
    sortData: sortData,
    deleteForecasts: deleteForecasts
  };

  function sortData(data) {
    debugger
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
    for (var i = 0; i < 7; i++ ) {
      data[i].hourly.splice(0,2);
    }
    return data;
  }

});
