gnarApp.factory('MapFactory',['uiGmapGoogleMapApi', '$geolocation', 'uiGmapIsReady', '$rootScope', function(uiGmapGoogleMapApi, $geolocation, uiGmapIsReady, $rootScope){

  var MapFactory = function() {
    var self = this;

    self.options =
    {
      styles: [
        {
          "featureType": "administrative",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.neighborhood",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "landscape.man_made",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "visibility": "on"
            },
            {
              "color": "#e0efef"
            }
          ]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "visibility": "on"
            },
            {
              "hue": "#1900ff"
            },
            {
              "color": "#c0e8e8"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "lightness": 100
            },
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "visibility": "on"
            },
            {
              "lightness": 700
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
            {
              "color": "#7dcdcd"
            }
          ]
        }
      ]};

      var events = {
        places_changed: function (searchBox) {
          var place = searchBox.getPlaces();
          self.lat = place[0].geometry.location.lat();
          self.lng = place[0].geometry.location.lng();
          self.map = {
            center:{
              latitude: place[0].geometry.location.lat(),
              longitude: place[0].geometry.location.lng()
            },
            zoom:8
          };
        }
      };

      self.searchbox = { template:'searchbox.tpl.html', events: events };

      $geolocation.getCurrentPosition()
      .then(function(location){
        $rootScope.status = "loading";
        self.coords = location.coords;
      })
      .then(function(){
        return uiGmapGoogleMapApi
        .then(function() {
          var lat = self.coords.latitude;
          var long = self.coords.longitude;
          var coords = {latitude: lat, longitude: long};
          self.map = { center: coords, zoom: 8 };
          self.myLocation = {
            id: 420,
            coords: {
              latitude: lat,
              longitude: long
            },
            options: {icon:'{src:"../The-app-of-GNAR/images/userLocation.svg"}'}
          };
        });
      });

      uiGmapIsReady.promise()
      .then(function(instances) {
        $rootScope.status = "ready";
      });


      self.searchboxTemplate = function() {
        return self.searchbox.template;
      };

      self.searchboxEvents = function() {
        return events;
      };

    };

    return MapFactory;
  }]);
