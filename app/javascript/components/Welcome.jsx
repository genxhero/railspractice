
/**
 * The first thing a user will see, this splash page will be the main portal.
 * Should contain links to the map or search feature.
 * Additionally, a search bar for finding places that match.
 * Actually a dropdown menu for states and highways could be awesome.
 */
import React from "react"
import PropTypes from "prop-types"
const  Welcome = () =>  {
  const [shiftPane, currentPane] = useState()
    return (
      <div className="welcome-page">
        <div className="welcome-message">
          <h2 className="welcome-subtitle">Welcome To</h2>
          <h1 className="welcome-title">Wanderer Reborn</h1>
        </div>
        <div className="Welcome search bar"></div> 
      </div>
    )
}

export default Welcome
