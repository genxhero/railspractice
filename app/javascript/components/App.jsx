import React, {useState} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Header from './Header';
import LocationShow from './LocationShow';
import axios from 'axios';


const App = (props) => {
    console.log(props.currentUser);
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
              <Route Route exact path={"/locations/:locationId"}  component={LocationShow}/>
          </Switch>
        </BrowserRouter>
    )

}

export default App;