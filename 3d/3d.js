var map;

function createMap() {
  map = new OSMBuildings({
    position: { latitude: 50.061389, longitude: 19.938333 },
    tilt: 30,
    baseURL: 'js/lib/OSMBuildings',
    zoom: 16,
    minZoom: 15,
    maxZoom: 20,
    effects: ['shadows'],
    attribution: '© Data <a href="https://openstreetmap.org/copyright/">OpenStreetMap</a> © Map <a href="https://mapbox.com/">Mapbox</a> © 3D <a href="https://osmbuildings.org/copyright/">OSM Buildings</a>'
  }).appendTo(document.getElementById('map'));

  map.addMapTiles('https://{s}.tiles.mapbox.com/v3/osmbuildings.kbpalbpk/{z}/{x}/{y}.png');
  map.addGeoJSONTiles('https://{s}.data.osmbuildings.org/0.2/ph2apjye/tile/{z}/{x}/{y}.json', { fixedZoom: 15 });

  map.on('pointermove', function(e) {
    map.getTarget(e.detail.x, e.detail.y, function(id) {
      if (id) {
        map.highlight(id, '#ffffff');
      } else {
        map.highlight(null);
      }
    });
  });
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
}


function getPointsFromApi() {
  $.get("/api/points", function(data, status){
   shuffle(data);
    for (var i=0; i < 100; i++) {
      addPoint(data[i].latitude, data[i].longitude, data[i].height);
    }

    console.log(status);
  });
}

function addPoint(long, lat, height) {
  var geojson = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      properties: {
        color: '#00ff00',
        roofColor: '#00ff00',
        height: height,
        minHeight: 0
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [long - 0.0001, lat  - 0.0001],
            [long + 0.0001, lat  - 0.0001],
            [long + 0.0001, lat  + 0.0001],
            [long - 0.0001, lat  + 0.0001],
            [long - 0.0001, lat  - 0.0001]
          ]
        ]
      }
    }]
  };

  map.addGeoJSON(geojson);
}


$( document ).ready(function() {
  createMap();
  getPointsFromApi();
});


