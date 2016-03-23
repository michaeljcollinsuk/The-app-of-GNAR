gnarApp.config(function ($routeProvider) {
      $routeProvider
        .when("/map", {
          templateUrl: "js/templates/map.html",
          controller: "mapController as mapCtrl"
        })
        .when("/locations", {
          templateUrl: "js/templates/locations.html",
          controller: "locationController as locationCtrl"
        })
        .when("/locations/:id", {
          templateUrl: "js/templates/location-details.html",
          controller: "locationController as locationCtrl"
        })
        .otherwise({redirectTo: "/map"});
});
