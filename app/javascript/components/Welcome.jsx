
/**
 * The first thing a user will see, this splash page will be the main portal.
 * Should contain links to the map or search feature.
 * Additionally, a search bar for finding places that match.
 * Actually a dropdown menu for states and highways could be awesome.
 */
import React, {useState} from "react"
import PropTypes from "prop-types"
import WelcomeOne from './panes/WelcomeOne'
import WelcomeTwo from './panes/WelcomeTwo';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'


const  Welcome = () =>  {
  //TODO: Move panes to their own file, justhave multiple components in
  const panes = [<WelcomeOne />, <WelcomeTwo />]
  const [currentPane, shiftPane] = useState(0)
  
  const nextPane = () => {
    if (currentPane === panes.length - 1) {
      shiftPane(0)
    } else {
      shiftPane(currentPane + 1)
    }
  }

  const prevPane = () => {
    if (currentPane === 0) {
      shiftPane(panes.length - 1)
    } else {
      shiftPane(currentPane - 1)
    }
  }

    return (
      <div className="welcome-page">
        <div className="welcome-carousel">
            <div className="welcome-carousel-arrow welcome-carousel-arrow-left">
            <FaAngleLeft onClick={prevPane}/>
          </div>
          {panes[currentPane]}
          <div className="welcome-carousel-arrow welcome-carousel-arrow-right">
            <FaAngleRight onClick={nextPane}/> 
          </div>
        </div>
       
        <div className="Welcome search bar"></div> 
      </div>
    )
}

export default Welcome
