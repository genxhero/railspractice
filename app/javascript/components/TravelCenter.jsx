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
            <div onClick={() => expandOrCollapse(true)}>
                EXPAND DONG
            </div>
        )
    }

   
}

export default TravelCenter;