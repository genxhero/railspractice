import React, {useState} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Header from './Header';
import LocationShow from './LocationShow';
import UserDashboard from './UserDashboard';
import axios from 'axios';
import Welcome from './Welcome';


const App = (props) => {
    const logout = () => {
        event.preventDefault();
        axios.delete('/session').then( res => {
            updateUser(null);
        })
    }

    const [currentUser, updateUser] = useState(props.currentUser)
    return (
        <BrowserRouter>
          <Header updateUser={updateUser} currentUser={currentUser} logout={logout}/>
          <div className="app-main-content">
            <Switch>
              <Route exact path={"/"} component={Welcome} />
              <Route exact path={"/dashboard"} render={(props) => <UserDashboard {...props} currentUser={currentUser} />} />
              <Route exact path={"/locations/:locationId"} render={(props) => <LocationShow {...props} currentUser={currentUser} />} />
            </Switch>
          </div>
  
        </BrowserRouter>
    )

}

export default App;