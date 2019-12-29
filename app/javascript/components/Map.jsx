import React, {useState} from 'react'
import {Link, withRouter} from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import secret from '../utils/secret';
import Marker from './Marker';

const Map = (props) => {
    const key = secret;
    const [center, updateCenter] = useState(props.center)
    console.log(props.zoom)
return (
    <div className="location-show-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key }}
          defaultCenter={center}
          defaultZoom={props.zoom}>
           { props.travelCenters.map( place => {
             return <Marker lat={place.lat} lng={place.lng} color="blue" key={place.name} name={place.name}/>
            })}
            { props.restaurants.map( place => {
             return <Marker lat={place.lat} lng={place.lng} color="red" key={place.name} name={place.name}/>
            })}
            { props.lodgings.map( place => {
             return <Marker lat={place.lat} lng={place.lng} color="green" key={place.name} name={place.name}/>
            })}
            { props.coffeeShops.map( place => {
             return <Marker lat={place.lat} lng={place.lng} color="brown" key={place.name} name={place.name}/>
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
    zoom: 15
  };

export default withRouter(Map);