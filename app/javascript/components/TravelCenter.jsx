/**
 * Component to display a Travel center
 */

import React from 'react'

const TravelCenter = (props) => {
    return (
        <div className="place-card">
            {props.travelCenter.name} 
            <div>Unleaded: ${parseFloat(props.travelCenter.unleaded).toFixed(2)}</div>
            <div>Diesel: ${parseFloat(props.travelCenter.diesel).toFixed(2)}</div>
        </div>
    )
}

export default TravelCenter;