import React, {useState} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Header from './Header';
import LocationShow from './LocationShow';
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
          <Switch>
              <Route exact path={"/"} component={Welcome} />
              <Route exact path={"/locations/:locationId"} render={(props) => <LocationShow {...props} currentUser={currentUser} />} />
          </Switch>
        </BrowserRouter>
    )

}

export default App;