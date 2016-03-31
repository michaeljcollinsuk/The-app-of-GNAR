gnarApp.controller('socialMediaController', ['MarineApiFactory', 'instagramFactory', function(MarineApiFactory, instagramFactory) {
  var self = this;
  self.currentLocation = MarineApiFactory.location;

  self.tag = instagramFactory.generateTag(self.currentLocation.name);
  instagramFactory.loadInstagram(self.tag);

}]);
