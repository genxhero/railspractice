/**
 * Component to display a Travel center
 */

import React from 'react'

const TravelCenter = (props) => {
    return (
        <div className="place-card">
            {props.travelCenter.name} 
        </div>
    )
}

export default TravelCenter;