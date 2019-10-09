
/**
 * The first thing a user will see, this splash page will be the main portal.
 * Should contain links to the map or search feature.
 */
import React from "react"
import PropTypes from "prop-types"
class Welcome extends React.Component {
  render () {
    return (
      <div className="welcome-page">
        <div className="welcome-message">
          <h2 className="welcome-subtitle">Welcome To</h2>
          <h1 className="welcome-title">Wanderer Reborn</h1>
        </div>
      </div>
    )
  }
}

export default Welcome
