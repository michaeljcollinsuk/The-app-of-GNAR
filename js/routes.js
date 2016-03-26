gnarApp.config(function ($routeProvider) {
      $routeProvider
        .when("/map", {
          templateUrl: "js/templates/map.html",
          controller: "mapController as mapCtrl"
        })
        .when("/location/:name", {
          templateUrl: "js/templates/location.html",
          controller: "locationController as locationCtrl"
        })
        .when("/location/:name/instagram", {
          templateUrl: "js/templates/instagram.html",
          controller: "socialMediaController as socialCtrl"
        })
        .otherwise({redirectTo: "/map"});
});
