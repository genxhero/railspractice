import React, {useState} from 'react'
import {Link, withRouter} from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import secret from '../utils/secret';
import Marker from './Marker';

const Map = (props) => {
    const key = secret;
    console.log(props.center)
return (
    <div className="location-show-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key }}
          defaultCenter={props.center}
          defaultZoom={props.zoom}>
             <Marker
            lat={37.111440}
            lng={-121.016870}
            name="Love's"
            color="blue"
          />
          </GoogleMapReact>
        
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