import React, {useState} from 'react'
import {Link, withRouter} from 'react-router-dom';
import GoogleMapReact from 'google-map-react';

const Map = (props) => {
    const key = "AIzaSyBSY9wBBonJJ00Lp4YSEzx7LHzY66UAzeI"
    debugger;
return (
    <div>
        <GoogleMapReact
          bootstrapURLKeys={{ key }}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
        />   
    </div>
  
    
    
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