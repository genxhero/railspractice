/**\
 * To make the code more DRY, this experimental component is to be created.
 */

import React, {useState} from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const parseValue = (value) => {
    switch (value) {
        case true:
            return "Yes"
        case false:
            return "No"
        case null:
            return "Unknown"
        default: 
            return value
    }
} 

const PlaceCard = (props) => {
    const [isExpanded, expandOrCollapse] = useState(false)
    if (isExpanded) {
         return (
        <div className="place-card place-card-expanded">
            <div className="chevron-container">
                 <FaChevronUp onClick ={() => expandOrCollapse(false)}/>
            </div>
            <div className="place-card-data">
                <div className="place-card-name">{props.place.name}</div> 
                <div>{props.place.description}</div>
                {props.place.fields.map( field => {
                        return (
                        <div>
                            <span className="place-card-fieldname">{field.name}:</span> 
                            <span className="place-card-fieldvalue">{parseValue(field.value)}</span>
                        </div>
                        )
                })}
            </div>
        </div>
    ) 
    } else {
        return (
            <div className="place-card place-card-collapsed">
                 <div className="chevron-container">
                     <FaChevronDown onClick={() => expandOrCollapse(true)} /> 
                </div>
                <div className="place-card-data">
                 {props.place.name}
                </div>
            </div>
        )
    }
  
}
export default PlaceCard;