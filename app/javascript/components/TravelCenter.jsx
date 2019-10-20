/**
 * Component to display a Travel center
 */

import React, {useState} from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


const TravelCenter = (props) => {
    const [isExpanded, expandOrCollapse] = useState(false)
    if (isExpanded) {
    return (
            <div className="place-card-expanded">
                <div className="chevron-container">
                    <FaChevronUp onClick ={() => expandOrCollapse(false)}/>
                </div>
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
                <div className="chevron-container">
                     <FaChevronDown onClick={() => expandOrCollapse(true)} /> 
                </div>
                <div className="place-card-data">
                 Name will go here later.
                </div>
            </div>
        )
    }

   
}

export default TravelCenter;