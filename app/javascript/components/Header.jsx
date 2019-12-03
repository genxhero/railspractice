import React, {useState, useEffect} from 'react';
import Signup from './Signup';
import Login from './Login';
import axios from 'axios';
import $ from 'jquery';
import {TEST_CLASSES} from './constants';


const Header = props => {

    const logout = () => {
        event.preventDefault();
        axios.delete('/session').then( res => {
            updateUser(null);
        })
    }

    const [currentUser, updateUser] = useState(props.currentUser);
    const [form, setForm] = useState({open: false, type: ""})

    const close = () => {  
        setForm({open:false, type: ""});    
        $('body').css('overflow', 'auto');
    }

    const open = (formType) => {
        $("html, body").animate({ scrollTop: 0 });
        $('body').css('overflow', 'hidden');
        setForm({open: true, type: formType})
    }

    useEffect( () => {
        console.log("Props:", props.currentUser)
        console.log("State:", currentUser)
        updateUser(props.currentUser);
    })

    const testCase = currentUser ? TEST_CLASSES[currentUser.test_group] : "";
    return (
        <div className={`header header${testCase}`}>
            <h1 className={`header-title header-title${testCase}`}> Wanderer - Reborn</h1>
            {
                !currentUser ? (
                <div>
                    <button onClick={ () => { open("login")}}>Login</button>
                    <button onClick={ () => { open("register")}}>Register</button>
                </div> 
                ) : (
                <div>
                    <h3>{currentUser.username}</h3>
                    <button onClick={props.logout}>Log Out</button>
                </div>
                )
            }
      
            {(form.open && form.type === "login") && <Login close={close} update={props.updateUser}/>}
            {(form.open && form.type === "register")  && <Signup close={close} update={props.updateUser}/>}
        </div>
    )
}

export default Header;