/**
 * This component displays all information for a gven coffee shop.
 * It expects a JSON object as a prop.
 */

import React, {useState} from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


const CoffeeShop = (props) => {
    const [isExpanded, expandOrCollapse] = useState(false)

    if (isExpanded) {
         return (
        <div className="place-card">
            <div className="chevron-container">
                    <FaChevronUp onClick ={() => expandOrCollapse(false)}/>
                </div>
            <div className="place-card-data">
                <div>{props.coffeeShop.name}</div>
                <div>WiFi: {props.coffeeShop.wifi ? "Yes" : "No"}</div>
                <div>Couches: {props.coffeeShop.couches ? "Yes" : "No"} </div>
                <div>Armchairs: {props.coffeeShop.armchairs ? "Yes" : "No"}</div>
            </div>
       
        </div>
    )
    } else {
        return (
            <div>

            </div>
        )
    }
}

export default CoffeeShop;