function initMap() {
 // Create a map object and specify the DOM element for display.
        var bakersfield = {lat: 35.309836, lng: -119.061677};
        var chico = {lat: 39.746870, lng: -121.892495};
        var fresno = {lat: 36.658369, lng: -119.713567};
        var manteca = {lat: 37.784114, lng: -121.210043};
        var oakley = {lat: 38.004746, lng: -121.744987};
        var redwoodCity = {lat: 37.486457, lng: -122.212388};
        var sacramento = {lat: 38.560174, lng: -121.576380};
        var salinas = {lat: 36.776008, lng: -121.670174};
        var sanJose = {lat: 37.365146, lng: -121.894817};
        var sanJoseCorp = {lat: 37.364019, lng: -121.894037};
        var sanJoseFusion = {lat: 37.362051, lng: -121.893044};
        var santaRosa = {lat: 38.386019, lng: -122.712378};
        
        var map = new google.maps.Map(document.getElementById('locations-hero'), {
              center: {lat: 36.778259, lng: -119.417931},
              zoom: 6,
              draggable: false,
              scrollwheel: false,
              mapTypeControl: false
        });
         // Add a style-selector control to the map.
          var styleControl = document.getElementById('style-selector-control');
          map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);

          // Set the map's style to the initial value of the selector.
          var styleSelector = document.getElementById('style-selector');
          map.setOptions({styles: styles[styleSelector.value]});

          // Apply new JSON when the user selects a different style.
          styleSelector.addEventListener('change', function() {
            map.setOptions({styles: styles[styleSelector.value]});
          })

        var marker = new google.maps.Marker({
          position: bakersfield,
          map: map,
          title: 'R&amp;B Bakersfield'
          });
        var marker = new google.maps.Marker({
          position: chico,
          map: map,
          title: 'R&amp;B Chico'
          });
        var marker = new google.maps.Marker({
          position: fresno,
          map: map,
          title: 'R&amp;B Fresno'
          });
        var marker = new google.maps.Marker({
          position: manteca,
          map: map,
          title: 'R&amp;B Manteca'
          });
        var marker = new google.maps.Marker({
          position: oakley,
          map: map,
          title: 'R&amp;B Oakley'
          });
        var marker = new google.maps.Marker({
          position: redwoodCity,
          map: map,
          title: 'Redwood City'
          });
        var marker = new google.maps.Marker({
          position: sacramento,
          map: map,
          title: 'R&amp;B Sacramento'
          });
        var marker = new google.maps.Marker({
          position: salinas,
          map: map,
          title: 'R&amp;B Salinas'
          });
        var marker = new google.maps.Marker({
          position: sanJose,
          map: map,
          title: 'R&amp;B San Jose'
          });
        var marker = new google.maps.Marker({
          position: sanJoseCorp,
          map: map,
          title: 'R&amp;B San Jose Corp'
          });
        var marker = new google.maps.Marker({
          position: sanJoseFusion,
          map: map,
          title: 'R&amp;B San Jose Fusion'
          });
        var marker = new google.maps.Marker({
          position: santaRosa,
          map: map,
          title: 'R&amp;B Santa Rosa'
          });
 }
 var styles = {
  default: null,

  retro: [
    {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
    {
      featureType: 'administrative',
      elementType: 'geometry.stroke',
      stylers: [{color: '#c9b2a6'}]
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'geometry.stroke',
      stylers: [{color: '#dcd2be'}]
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels.text.fill',
      stylers: [{color: '#ae9e90'}]
    },
    {
      featureType: 'landscape.natural',
      elementType: 'geometry',
      stylers: [{color: '#dfd2ae'}]
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [{color: '#dfd2ae'}]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '#93817c'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry.fill',
      stylers: [{color: '#a5b076'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#447530'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#f5f1e6'}]
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [{color: '#fdfcf8'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#f8c967'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#e9bc62'}]
    },
    {
      featureType: 'road.highway.controlled_access',
      elementType: 'geometry',
      stylers: [{color: '#e98d58'}]
    },
    {
      featureType: 'road.highway.controlled_access',
      elementType: 'geometry.stroke',
      stylers: [{color: '#db8555'}]
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [{color: '#806b63'}]
    },
    {
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [{color: '#dfd2ae'}]
    },
    {
      featureType: 'transit.line',
      elementType: 'labels.text.fill',
      stylers: [{color: '#8f7d77'}]
    },
    {
      featureType: 'transit.line',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#ebe3cd'}]
    },
    {
      featureType: 'transit.station',
      elementType: 'geometry',
      stylers: [{color: '#dfd2ae'}]
    },
    {
      featureType: 'water',
      elementType: 'geometry.fill',
      stylers: [{color: '#b9d3c2'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#92998d'}]
    }
  ],

  hiding: [
    {
      featureType: 'poi.business',
      stylers: [{visibility: 'off'}]
    },
    {
      featureType: 'transit',
      elementType: 'labels.icon',
      stylers: [{visibility: 'off'}]
    }
  ]
};