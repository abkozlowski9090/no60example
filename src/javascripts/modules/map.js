export default class Map {
  constructor(el) {
    let latVal = el.getAttribute("data-lat")
    let lngVal = el.getAttribute("data-lng")
    let popupTenants = document.querySelector('#mapval').getAttribute("data-popuptenants");
    let popupText = document.querySelector('#mapval').getAttribute("data-popupcontent");
    let markerVals = document.querySelector('#mapval').dataset['markerpoint'];
    let latlngvalues = JSON.parse(markerVals);
    let popUpTextValue = JSON.parse(popupText);
    let popUpTenantsValue = JSON.parse(popupTenants);



    let geojson = {
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-2.242152, 53.479963],
        },
        properties: {
          title: '',
          description: ''
          }
      }]
    };



  latlngvalues.forEach(featureAdd);
  function featureAdd(value, i) {
    console.log(popupTenants[i]);
    geojson['features'].push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: value
        },
        properties: {
          title: popUpTextValue[i],
          description: popUpTenantsValue[i]
          }
      });
    }



    // let geojson = {
    //   type: 'FeatureCollection',
    //   features: [{
    //       type: 'Feature',
    //       geometry: {
    //         type: 'Point',
    //         coordinates: [-2.241866, 53.480354]
    //       },
    //       properties: {
    //       title: 'Six By Nico',
    //       description: ''
    //     }
    //     }, {
    //       type: 'Feature',
    //       geometry: {
    //         type: 'Point',
    //         coordinates: [-2.241711, 53.480160]
    //       },
    //       properties: {
    //       title: 'Black Sheep Coffee',
    //       description: ''
    //     }
    //   }]
    // };


    mapboxgl.accessToken = 'pk.eyJ1IjoicGVyc29uYXN0dWRpbyIsImEiOiJjand1ZzVkMmoxNnJ5M3pwNXVpNGlsdjBrIn0.HP9Vbjn0GChejeBJF8mdAA';
    const map = new mapboxgl.Map({
     container: el,
     style: 'mapbox://styles/personastudio/cjpwjjv1g05md2rrsjp0jt0dv',
     center: [-2.242148, 53.480174],
     zoom: 15.28,
    });


    map.scrollZoom.disable();
    map.addControl(new mapboxgl.NavigationControl());

    var count = 0;
    geojson.features.forEach(function(marker) {

      if ( count == 0 ) {
        var el = document.createElement('div');
        el.className = 'marker';
        count++;
      } else {
          // create a HTML element for each feature
          var el = document.createElement('div');
          el.className = 'marker';
          el.setAttribute("data-pincount", count);
          count++;
        }




      new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(new mapboxgl.Popup({ offset: 1 }) // add popups
      .setHTML('<p class="h5">' + marker.properties.title + '</p><p>' + marker.properties.description + '</p>'))
    .addTo(map);
    });




  }
}
