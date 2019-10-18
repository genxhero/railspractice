/**
 * Component to display a Travel center
 */

import React, {useState} from 'react'


const TravelCenter = (props) => {
    const [isExpanded, expandOrCollapse] = useState(false)

    if (isExpanded) {
    return (
            <div className="place-card">
                {props.travelCenter.name} 
                <div>Unleaded: ${parseFloat(props.travelCenter.unleaded).toFixed(2)}</div>
                <div>Diesel: ${parseFloat(props.travelCenter.diesel).toFixed(2)}</div>
            </div>
        )
    } else {
        return (
            <div className="place-card"onClick={() => expandOrCollapse(true)}>
                {props.travelCenter.name}
            </div>
        )
    }

   
}

export default TravelCenter;