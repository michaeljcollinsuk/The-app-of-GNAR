gnarApp.factory('GnarlometerFactory', [function(){
  var windSpeed;
  var swell;
  var period;

  return {
    calculateGnar: calculateGnar
  };

function calculateGnar(windSpeed,swell,period) {
  windRatio = windSpeed/73;
  swellRatio = swell/30;
  periodRatio = period/16;
  average = (windRatio + swellRatio + periodRatio)/3;
  return Math.round(average*10);
  }
}]);
