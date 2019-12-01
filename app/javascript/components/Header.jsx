import React, {useState} from 'react';
import Signup from './Signup';
import Login from './Login';
import axios from 'axios';



const Header = props => {

    const logout = () => {
        event.preventDefault();
        axios.delete('/session').then( res => {
            debugger;
            updateUser(null);
        })
    }
    console.log(props)
    const [currentUser, updateUser] = useState(props.currentUser);
    const [form, setForm] = useState({open: false, type: ""})
    const close = () =>{  setForm({open:false, type: ""});    }

    return (
        <div className="header">
            <h1> This is a header</h1>
            {
                currentUser ? (
                <div>
                    <button onClick={ () => { setForm({open: true, type: "login"})}}>Login</button>
                    <button onClick={ () => { setForm({open: true, type: "register"})}}>Register</button>
                </div> 
                ) : (
                <div>
                    <h3>currentUser.username</h3>
                    <button onClick={logout}>Log Out</button>
                </div>
                )
            }
      
            {(form.open && form.type === "login") && <Login close={close} update={updateUser}/>}
            {(form.open && form.type === "register")  && <Signup close={close} update={updateUser}/>}
        </div>
    )
}

export default Header;