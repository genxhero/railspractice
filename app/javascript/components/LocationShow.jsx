
/**
 * Page for displaying a specific town
 */

import React from "react"
import PropTypes from "prop-types"
import TravelCenter from './TravelCenter';
import CoffeeShop from './CoffeeShop';

const Location = (props) => {

    return (
        <div className="location-show-page">
            <div className="location-show columns">
                <div>
                {props.places.coffeeShops.map( coffeeShop => {
                        return <CoffeeShop coffeeShop={coffeeShop} />
                    })}
                </div>

                <div>Insert Restaurants here</div>

                <div>
                    {props.places.travelCenters.map( travelCenter => {
                        return <TravelCenter travelCenter={travelCenter} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Location;