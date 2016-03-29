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
            "color": "#f2f2f2"
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
            "color": "#46bcec"
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
      uiGmapGoogleMapApi
      .then(function() {
      self.map = Geolcation.generateMap(self.coords);

      // { center: { latitude: self.coords.latitude, longitude: self.coords.longitude }, zoom: 5
      // };
      // self.marker = ({
      //   id:0,
      //   coords: {
      //   latitude: 40.1451,
      //   longitude: -99.6680
      // },
      //
      // });

      });
    });


  };

  return MapFactory;
}]);
