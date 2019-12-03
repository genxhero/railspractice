import React, {useState} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Header from './Header';


const App = (props) => {
    const logout = () => {
        event.preventDefault();
        axios.delete('/session').then( res => {
            debugger;
            updateUser(null);
        })
    }

    const [currentUser, updateUser] = useState(props.currentUser)
    return (
        <BrowserRouter>
          <Header updateUser={updateUser} currentUser={currentUser}/>
        </BrowserRouter>
    )

}

export default App;