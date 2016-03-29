describe('socialMediaController', function(){
  var ctrl;

  beforeEach(module('GnarApp', function ($routeProvider) {
      $routeProvider.otherwise(function(){return false;});
  }));


  beforeEach(inject(function($controller) {
    ctrl = $controller('socialMediaController');
  }));


});
