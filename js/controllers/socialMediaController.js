gnarApp.controller('socialMediaController', ['chosenLocationFactory', 'instagramFactory', function(chosenLocationFactory, instagramFactory) {
  var self = this;
  self.currentLocation = chosenLocationFactory.location;

  self.tag = instagramFactory.generateTag(self.currentLocation.name);
  instagramFactory.loadInstagram(self.tag);

}]);
