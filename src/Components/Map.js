import React, { Component } from 'react';

import "../CSS/toogle.css";

import 'react-bootstrap';

import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoidW1haXI5MDEiLCJhIjoiY2txdzR0NXA3MDQ3cDJybnhjdHBnandqeiJ9.zmKxFLnZtE1WZ9SHV-K6rQ';




class MapComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lng: 73.1350,
      lat: 31.4504,
      zoom: 4,
      style:``
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

      <div id="wrapper" class="active">

        <div id="sidebar-wrapper">
          <ul id="sidebar_menu" class="sidebar-nav">
            <li class="sidebar-brand"><a id="menu-toggle" href="#">Legend<span id="main_icon" class="glyphicon glyphicon-align-justify"></span></a></li>
          </ul>
          <ul class="sidebar-nav" id="sidebar">
            <p>Legend</p>
            {/* <li><a>Link1<span class="sub_icon glyphicon glyphicon-link"></span></a></li>
            <li><a>link2<span class="sub_icon glyphicon glyphicon-link"></span></a></li> */}
          </ul>
        </div>
        <div id="page-content-wrapper">
        <div id="map" style={{ height: "540px", width: "auto" }}  class="page-content inset" >

        </div>
        </div>
        
      </div>


    );
  }
}

export default MapComponent;