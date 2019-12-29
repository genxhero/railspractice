import React, {useState} from 'react'
import {Link, withRouter} from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import secret from '../utils/secret';
import Marker from './Marker';
/**
 * Map component to be rendered on the Location Finder page, all Locations in the Database will be displayed thereupon
 */

const Map = (props) => {
    const key = secret;
    const [center, updateCenter] = useState(props.center)
    console.log(props.locations)
return (
    <div className="location-finder-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key }}
          defaultCenter={center}
          defaultZoom={props.zoom}>
           { props.locations.map( location => {
             return <Marker lat={location.lat} lng={location.lng} color="blue" key={location.name} name={location.name} centerOnMe={updateCenter}/>
            })}
         
               
          </GoogleMapReact>
        
    </div>
  
    
    
)
}

Map.defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 5
  };

export default withRouter(Map);