import React, {useState} from 'react';
import Signup from './Signup';
import Login from './Login';



const Header = props => {

    const [form, setForm] = useState({open: false, type: ""})
    const close = () =>{  setForm({open:false, type: ""});    }

    return (
        <div className="header">
            <h1> This is a header</h1>
            <button onClick={ () => { setForm({open: true, type: "login"})}}>Login</button>
            <button onClick={ () => { setForm({open: true, type: "register"})}}>Register</button>
            {(form.open && form.type === "login") && <Login close={close} />}
            {(form.open && form.type === "register")  && <Signup close={close}/>}
        </div>
    )
}

export default Header;