/**
 * This component displays all information for a gven coffee shop.
 * It expects a JSON object as a prop.
 */

import React from 'react'

const CoffeeShop = (props) => {
    return (
        <div className="place-card">
            {props.coffeeShop.name}
        </div>
    )
}

export default CoffeeShop;