gnarApp.config(function ($routeProvider) {
      $routeProvider
        .when("/map", {
          templateUrl: "js/templates/map.html",
          controller: "mapController as mapCtrl"
        })
        .when("/location/:id", {
          templateUrl: "js/templates/location.html",
          controller: "locationController as locationCtrl"
        })
        // .otherwise({redirectTo: "/map"});
});
