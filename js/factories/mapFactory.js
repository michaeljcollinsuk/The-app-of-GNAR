gnarApp.factory('MapFactory',['uiGmapGoogleMapApi', '$geolocation', function(uiGmapGoogleMapApi, $geolocation){

  var MapFactory = function() {
    var self = this;

    self.options =
    {
      styles: [
      {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#444444"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
          {
            "color": "#e3e3e3"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 45
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "color": "#9ad3de"
          },
          {
            "visibility": "on"
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
          options: {icon:'../../images/myLocation.svg'}
        };

      });
    });


  };

  return MapFactory;
}]);
