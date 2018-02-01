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

  var geojson = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      properties: {
        color: '#00ff00',
        roofColor: '#00ff00',
        height: 50,
        minHeight: 0
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [19.93000, 50.06000],
            [19.93010, 50.06000],
            [19.93010, 50.06010],
            [19.93000, 50.06010],
            [19.93000, 50.06000]
          ]
        ]
      }
    }]
  };

  map.addGeoJSON(geojson);

  var geojson2 = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      properties: {
        color: '#00ff00',
        roofColor: '#00ff00',
        height: 100,
        minHeight: 0
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [19.94000, 50.05000],
            [19.94010, 50.05000],
            [19.94010, 50.05010],
            [19.94000, 50.05010],
            [19.94000, 50.05000]
          ]
        ]
      }
    }]
  };

  map.addGeoJSON(geojson2);

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

$( document ).ready(function() {
  createMap();
});


