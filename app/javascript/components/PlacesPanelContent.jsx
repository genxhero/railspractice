import React from 'react';
import PlaceCard from './PlaceCard';
import TravelCenterCreate from './TravelCenterCreate';
import RestaurantCreate from './RestaurantCreate';
import CoffeeShopCreate from './CoffeeShopCreate';
import LodgingCreate from './LodgingCreate';



const PlacesPanelContent = (props) => {

    const Forms = {
        "travelCenters": <TravelCenterCreate location_id={props.locationId} close={props.closeModal} update={props.update}/>,
        "restaurants": <RestaurantCreate location_id={props.locationId} close={props.closeModal} update={props.update}/>,
        "coffeeShops": <CoffeeShopCreate location_id={props.locationId} close={props.closeModal} update={props.update}/>,
        "lodgings": <LodgingCreate location_id={props.locationId} close={props.closeModal} update={props.update}/>,

    }
    console.log(props.placeType);

    return (
        <div className={`location-show-column`}>
        {props.places.length === 0 && <h4>No Recommendations</h4>}
            {props.places.map( place => {
                return <PlaceCard place={place} key={place.name}/>
            })}
            {props.open && Forms[`${props.placeType}`]}
                { props.currentUser &&  <button onClick={ () => props.openModal(props.placeType)}>Click Me</button>}
        </div>
    )

}

export default PlacesPanelContent;