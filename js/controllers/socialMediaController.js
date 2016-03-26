gnarApp.controller('socialMediaController', ['chosenLocationService', 'instagramService', function(chosenLocationService, instagramService) {
  var self = this;
  self.currentLocation = chosenLocationService.selectedLocation;

  self.tag = instagramService.generateTag(self.currentLocation.name);
  instagramService.loadInstagram(self.tag);

}]);
