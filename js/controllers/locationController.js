gnarApp.controller('locationController', ['WeatherApiFactory', 'chosenLocationService', '$scope', function(WeatherApiFactory, chosenLocationService, $scope) {

  var self = this;
  var weatherApiFactory = new WeatherApiFactory();

    self.location = chosenLocationService.selectedLocation;

    var long = self.location.longitude;
    var lat = self.location.latitude;

    weatherApiFactory.getWeather(long, lat).then(function(response){
      self.weather = response;
    });

    var clientId = 'TWUEtv6ENrpmqHotXJKqGTW43';
    var clientSecret = '9fU2vn6NInM0EEFtep7tQKeZ95NY2d4YbKP8ji4uE4LXXVFZK7'

    // $cordovaOauth.twitter(clientId, clientSecret).then(function (succ) {
    //     $twitterApi.configure(clientId, clientSecret, succ);
    //   }, function(error) {
    //     console.log(error);
    // });


    // $twitterApi.configure(clientId, clientSecret, '5a014105744c33c0c96765817266e7fa');

  //   setTimeout(function(){
  //     $twitterApi.getHomeTimeline({count: 5}).then(function(data) {
  //       console.log(data);
  //     }, function(error) {
  //       console.log('err: ' + error);
  //     });
  // },2000);

  // $scope.authenticate = function(provider) {
  //     $auth.authenticate(provider);
  //   };

}]);
