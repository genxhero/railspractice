
/**
 * Page for displaying a specific town
 * TODO:  Use the useState hook to check whether we are currently creating something, display a modal with the form
 */

import React, {useState} from "react"
import PropTypes from "prop-types"
import TravelCenter from './TravelCenter';
import CoffeeShop from './CoffeeShop';
import Restaurant from './Restaurant';
import TravelCenterCreate from './TravelCenterCreate';
import $ from 'jquery';


const LocationShow = (props) => {

    const [open, openForm] = useState(false)

    const openModal = () => {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        $('body').css('overflow', 'hidden');
        openForm(true)
    }

    return (
        <div className="location-show-page">
            <h1>{props.location.name}, {props.location.state}</h1>
            <img className="location-show-image"src={props.location.image_url} alt={props.location.name}/>
            <div className="location-show columns" style={{"display":"flex", "flexDirection":"row"}}>
                <div className="location-show-column">
                    {props.places.coffeeShops.length === 0 && <h4>No Coffee Shops Recommended</h4>}
                {props.places.coffeeShops.map( coffeeShop => {
                        return <CoffeeShop coffeeShop={coffeeShop} />
                    })}
                </div>

                <div className="location-show-column">
                {props.places.restaurants.length === 0 && <h4>No Restaurants Recommended</h4>}

                {props.places.restaurants.map( restaurant => {
                        return <Restaurant restaurant={restaurant} />
                    })}
                </div>

                <div className="location-show-column">
                {props.places.travelCenters.length === 0 && <h4>No Travel Centers Recommended</h4>}
                    {props.places.travelCenters.map( travelCenter => {
                        return <TravelCenter travelCenter={travelCenter} />
                    })}
                </div>
            </div>
            {open && <TravelCenterCreate location_id={5} />}
            <button onClick={ () => openModal()}>Click Me</button>
        </div>
    )
}

export default LocationShow;