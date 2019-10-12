
/**
 * Page for displaying a specific town
 */

import React from "react"
import PropTypes from "prop-types"
import TravelCenter from './TravelCenter';
import CoffeeShop from './CoffeeShop';
import Restaurant from './Restaurant';

const Location = (props) => {
    const butt = "butt"
    debugger;
    const ass = "ass"

    return (
        <div className="location-show-page">
            <div className="location-show columns">
                <div>
                    {props.places.coffeeShops.length === 0 && <h4>No Coffee Shops Recommended</h4>}
                {props.places.coffeeShops.map( coffeeShop => {
                        return <CoffeeShop coffeeShop={coffeeShop} />
                    })}
                </div>

                <div>
                {props.places.restaurants.length === 0 && <h4>No Restaurants Recommended</h4>}

                {props.places.restaurants.map( restaurant => {
                        return <Restaurant restaurant={restaurant} />
                    })}
                </div>

                <div>
                {props.places.travelCenters.length === 0 && <h4>No Travel Centers Recommended</h4>}
                    {props.places.travelCenters.map( travelCenter => {
                        return <TravelCenter travelCenter={travelCenter} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Location;