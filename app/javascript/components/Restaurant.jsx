/**
 * This component displays all information for a restaurant
 * It expects a JSON object as a prop.
 * DEPRECATED - DELETE SOON
 */

import React from 'react'

const Restaurant = (props) => {
    const [isExpanded, expandOrCollapse] = useState(false)

    if (isExpanded) {
         return (
            <div className="place-card-expanded">
                <div className="chevron-container">
                        <FaChevronUp onClick ={() => expandOrCollapse(false)}/>
                    </div>
                <div className="place-card-data">
                    <div>{props.restaurant.name}</div>
                    <div>Type: {props.restaurant.shopType}</div>
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

export default Restaurant;