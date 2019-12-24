import React, {useState} from 'react'
import {Link, withRouter} from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import secret from '../utils/secret';
import Marker from './Marker';

const Map = (props) => {
    const key = secret;
    console.log(props.places)
return (
    <div className="location-show-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key }}
          defaultCenter={props.center}
          defaultZoom={props.zoom}>
           { props.places.map( place => {
             return <Marker lat={place.lat} lng={place.lng} color="blue"/>
            }
            
           )}
               
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