import React, {useState} from 'react';
import Signup from './Signup';
import Login from './Login';



const Header = props => {
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
                    <h3>currentUser.username</h3>
                )
            }
      
            {(form.open && form.type === "login") && <Login close={close} update={updateUser}/>}
            {(form.open && form.type === "register")  && <Signup close={close} update={updateUser}/>}
        </div>
    )
}

export default Header;