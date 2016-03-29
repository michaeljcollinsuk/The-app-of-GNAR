gnarApp.service('filterWeatherService', function() {
  var self = this;

  self.extractWeatherData = function(data) {
    // ;
    // console.log(weatherData);
    // setTimeout(function(){
    //   self.;
    // }, 10000);
    //
    // console.log(data)
    // return weatherData;
    var weatherData = self.deleteForecasts(data.data.data.weather);
    return weatherData;
  };

  self.deleteForecasts = function(data) {
    for (var i = 0; i < 7; i++ ) {
      data[i].hourly.splice(0,2);
    }
    return data;
  };

});
