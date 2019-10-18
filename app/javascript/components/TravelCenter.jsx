/**
 * Component to display a Travel center
 */

import React, {useState} from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";


const TravelCenter = (props) => {
    const [isExpanded, expandOrCollapse] = useState(false)

    if (isExpanded) {
    return (
            <div className="place-card-expanded">
                <FaMinus onClick ={() => expandOrCollapse(false)}/>
                <div>
                    {props.travelCenter.name} 
                    <div>Unleaded: ${parseFloat(props.travelCenter.unleaded).toFixed(2)}</div>
                    <div>Diesel: ${parseFloat(props.travelCenter.diesel).toFixed(2)}</div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="place-card-collapsed">
                <FaPlus onClick={() => expandOrCollapse(true)} /> 
                {props.travelCenter.name}
            </div>
        )
    }

   
}

export default TravelCenter;