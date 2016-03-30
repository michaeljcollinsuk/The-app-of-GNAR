gnarApp.controller('socialMediaController', ['chosenLocationService', 'instagramFactory', function(chosenLocationService, instagramFactory) {
  var self = this;
  self.currentLocation = chosenLocationService.selectedLocation;

  self.tag = instagramFactory.generateTag(self.currentLocation.name);
  instagramFactory.loadInstagram(self.tag);

}]);
