import React, { Component } from 'react';

import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoidW1haXI5MDEiLCJhIjoiY2txdzR0NXA3MDQ3cDJybnhjdHBnandqeiJ9.zmKxFLnZtE1WZ9SHV-K6rQ';





class MapComponent extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
        lng: 71,
        lat: 31,
        zoom: 6.48
      };

    }

  componentDidMount() {
      const { lng, lat, zoom } = this.state;

      var map = new mapboxgl.Map({
        container: 'map',
        center: [lng, lat],
        style: 'mapbox://styles/mapbox/dark-v10',
        zoom: zoom
        
      });


  }

  render() {
    
      return (
          <>
          
          <div id="map" style={{height:"545px", width:"auto"}} >
            
          </div>
        </>
      );
  }
}

export default MapComponent;