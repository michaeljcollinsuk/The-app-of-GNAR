gnarApp.controller('socialMediaController', ['chosenLocationService', 'instagramService', '$scope', function(chosenLocationService, instagramService, $scope) {
  self.currentLocation = chosenLocationService.selectedLocation;

  self.tag = instagramService.generateTag(self.currentLocation.name);
  instagramService.loadInstagram(self.tag);


}]);
