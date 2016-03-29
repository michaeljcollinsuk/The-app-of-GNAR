gnarApp.service('filterWeatherService', function() {
  var self = this;

  self.deleteForecasts = function(data) {
    for (var i = 0; i < 7; i++ ) {
      data[i].hourly.splice(0,2);
    }
    return data;
  };

});
