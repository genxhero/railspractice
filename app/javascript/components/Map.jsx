import React, {useState} from 'react'
import {Link, withRouter} from 'react-router-dom';
import GoogleMapReact from 'google-map-react';

const Map = (props) => {
return (
    <GoogleMapReact
    bootstrapURLKeys={{ key:""}}
    defaultCenter={this.props.center}
    defaultZoom={this.props.zoom}
  >
       </GoogleMapReact>
)
}

Map.defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

export default withRouter(Map);