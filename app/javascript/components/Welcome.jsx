
/**
 * The first thing a user will see, this splash page will be the main portal.
 * Should contain links to the map or search feature.
 * Additionally, a search bar for finding places that match.
 * Actually a dropdown menu for states and highways could be awesome.
 */
import React, {useState} from "react"
import PropTypes from "prop-types"
import WelcomeOne from './panes/WelcomeOne'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'


const  Welcome = () =>  {
  const panes = [<WelcomeOne />]
  const [currentPane, shiftPane] = useState(0)
    return (
      <div className="welcome-page">
        <div className="welcome-carousel-arrow">
          <FaAngleLeft />
        </div>
        {panes[currentPane]}
        <div className="welcome-carousel-arrow">
          <FaAngleRight /> 
        </div>
        <div className="Welcome search bar"></div> 
      </div>
    )
}

export default Welcome
