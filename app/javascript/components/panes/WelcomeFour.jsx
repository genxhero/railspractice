import React from 'react';

const WelcomeFour = () => {
    return (
        <div className="welcome-pane">
            <h3>About</h3>
            <li>           
                 <p>Wanderer Reborn is built with a Ruby on Rails backend using a PostgreSQL database and a React front-end loaded with the react-rails gem</p>
            </li>
            <li>
                <p>
                    It was built with adventurous people intending to take long road trips across the United States, listing major stops along the interstate system.
                    The main App component is loaded directly in the root Rails view using the React-Rails gem.
                </p>
            </li>
        </div>
    )
}

export default WelcomeFour;