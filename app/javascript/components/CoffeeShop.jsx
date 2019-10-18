/**
 * This component displays all information for a gven coffee shop.
 * It expects a JSON object as a prop.
 */

import React from 'react'

const CoffeeShop = (props) => {
    return (
        <div className="place-card">
            <div>{props.coffeeShop.name}</div>
            <div>WiFi: {props.coffeeShop.wifi ? "Yes" : "No"}</div>
            <div>Couches: {props.coffeeShop.couches ? "Yes" : "No"} </div>
            <div>Armchairs: {props.coffeeShop.armchairs ? "Yes" : "No"}</div>
        </div>
    )
}

export default CoffeeShop;