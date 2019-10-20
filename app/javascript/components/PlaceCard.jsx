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
    debugger;
    return (
        <div className="place-card-expanded">
            <div className="chevron-container">
                    <FaChevronUp onClick ={() => expandOrCollapse(false)}/>
            </div>
        </div>
    )
}
export default PlaceCard;