
/**
 * Page for displaying a specific town
 */

import React from "react"
import PropTypes from "prop-types"
import TravelCenter from './TravelCenter';

const Location = (props) => {
    debugger;
    return (
        <div className="location-show-page">
            <div className="location-show columns">
                <div>
                    Insert coffee shops here
                </div>

                <div>Insert Restaurants here</div>

                <div>
                    {props.locations.travelCenters.map( travelCenter => {
                        return <TravelCenter travelCenter={travelCenter} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Location;