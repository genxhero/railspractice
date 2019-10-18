/**
 * Component to display a Travel center
 */

import React from 'react'

const TravelCenter = (props) => {
    return (
        <div className="place-card">
            {props.travelCenter.name} 
            ${props.travelCenter.unleaded}
            ${props.travelCenter.diesel}
        </div>
    )
}

export default TravelCenter;