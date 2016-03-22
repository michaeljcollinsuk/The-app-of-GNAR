var gnarApp = angular.module('GnarApp', ['ngResource', 'uiGmapgoogle-maps'])


.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyCEB4CX4SEb3NzorvQZQ18SjB3JpGO8mpw',
        v: '3.22',
        libraries: 'weather,geometry,visualization'
    });
})

.controller("mapController", function($scope, uiGmapGoogleMapApi) {
    uiGmapGoogleMapApi.then(function(maps) {
      $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    });
});
