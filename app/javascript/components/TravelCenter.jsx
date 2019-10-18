/**
 * Component to display a Travel center
 */

import React from 'react'

const TravelCenter = (props) => {
    return (
        <div className="place-card">
            {props.travelCenter.name} 
            <div> Unleaded: ${props.travelCenter.unleaded}</div>
            <div>Diesel: ${props.travelCenter.diesel}</div>
        </div>
    )
}

export default TravelCenter;