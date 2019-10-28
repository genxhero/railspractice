
/**
 * Page for displaying a specific town
 * TODO:  Use the useState hook to check whether we are currently creating something, display a modal with the form
 */

import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import TravelCenter from './TravelCenter';
import CoffeeShop from './CoffeeShop';
import Restaurant from './Restaurant';
import TravelCenterCreate from './TravelCenterCreate';
import RestaurantCreate from './RestaurantCreate';
import CoffeeShopCreate from './CoffeeShopCreate';
import PlaceCard from './PlaceCard';
import $ from 'jquery';


const LocationShow = (props) => {

    // const [open, openForm] = useState(false)
    const [state, openForm] = useState({open: false, placeType: ''})
    const [places, updatePlaces] = useState(props.places)
    console.log(props.places)

    
    const openModal = (placeType) => {
        $("html, body").animate({ scrollTop: 0 });
        $('body').css('overflow', 'hidden');
        openForm({open: true, placeType})
    }

    const closeModal = () => {
        $('body').css('overflow', 'auto');
        openForm({open: false, placeType: ""})
    }
    return (
        <div className="location-show-page">
            <h1>{props.location.name}, {props.location.state}</h1>
            <img className="location-show-image"src={props.location.image_url} alt={props.location.name}/>
            <div className="location-show-columns">
                <div className="location-show-column">
                    {props.places.coffeeShops.length === 0 && <h4>No Coffee Shops Recommended</h4>}
                {props.places.coffeeShops.map( coffeeShop => {
                        // return <CoffeeShop coffeeShop={coffeeShop} />
                        return <PlaceCard place={coffeeShop} />
                    })}
                    {(state.open && state.placeType === "coffeeShop") && <CoffeeShopCreate location_id={props.location.id} close={closeModal}/>}
                    <button onClick={ () => openModal('coffeeShop')}>Click Me</button>
                </div>

                <div className="location-show-column">
                {props.places.restaurants.length === 0 && <h4>No Restaurants Recommended</h4>}

                {props.places.restaurants.map( restaurant => {
                         return <PlaceCard place={restaurant} />
                    })}
                    {(state.open && state.placeType === "restaurant") && <RestaurantCreate location_id={props.location.id} close={closeModal}/>}
                    <button onClick={ () => openModal('restaurant')}>Click Me</button>
                </div>

                <div className="location-show-column">
                {props.places.travelCenters.length === 0 && <h4>No Travel Centers Recommended</h4>}
                    {props.places.travelCenters.map( travelCenter => {
                        return <PlaceCard place={travelCenter} />
                    })}
                    {(state.open && state.placeType === "travelCenter") && <TravelCenterCreate location_id={props.location.id} close={closeModal}/>}
                    <button onClick={ () => openModal('travelCenter')}>Click Me</button>
                </div>
            </div>
        </div>
    )
}

export default LocationShow;