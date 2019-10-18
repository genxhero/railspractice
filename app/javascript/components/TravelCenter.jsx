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
                <div className="place-card-data">
                    <span>{props.travelCenter.name}</span>
                    <span>{props.travelCenter.description}</span>
                    <div>Unleaded: ${parseFloat(props.travelCenter.unleaded).toFixed(2)}</div>
                    <div>Diesel: ${parseFloat(props.travelCenter.diesel).toFixed(2)}</div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="place-card-collapsed">
                <FaPlus onClick={() => expandOrCollapse(true)} /> 
                <div className="place-card-data">
                    {props.travelCenter.name}
                </div>
            </div>
        )
    }

   
}

export default TravelCenter;