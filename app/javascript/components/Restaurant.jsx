/**
 * This component displays all information for a restaurant
 * It expects a JSON object as a prop.
 */

import React from 'react'

const Restaurant = (props) => {
    return (
        <div className="place-card">
            {props.restaurant.name}
        </div>
    )
}

export default Restaurant;