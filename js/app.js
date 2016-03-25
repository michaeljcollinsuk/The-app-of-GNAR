var gnarApp = angular.module('GnarApp', ['ngResource', 'uiGmapgoogle-maps', 'ngGeolocation', 'ngRoute'])


.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyCEB4CX4SEb3NzorvQZQ18SjB3JpGO8mpw',
        v: '3.22',
        libraries: 'weather,geometry,visualization,places'
    });
});
