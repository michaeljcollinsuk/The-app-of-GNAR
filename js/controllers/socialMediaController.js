gnarApp.controller('socialMediaController', ['chosenLocationService', 'instagramService', function(chosenLocationService, instagramService) {
  var self = this;
  self.showInstaFeed = false;
  self.currentLocation = chosenLocationService.selectedLocation;

  self.tag = instagramService.generateTag(self.currentLocation.name);
  instagramService.loadInstagram(self.tag);

  self.displayInstaFeed = function() {
    self.showInstaFeed = true;
  };


}]);
