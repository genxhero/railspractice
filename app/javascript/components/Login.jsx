/**
 Form for logging in a user
 */

import React, { useState } from 'react';
import axios from 'axios';

const csrfToken = document.querySelector('[name=csrf-token]').content
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

const Login = (props) => {
    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }

    const login = () => {
        axios.post('/session', {
            user: values,
            url: window.location.pathname
        }).then(res => {
            let butt = "butt"
            debugger;
            butt = "bitter"
        }).catch( res => 
           { debugger;}
            )
    }

    const clearErrors = () => {
        setErrors(null)
    }

    const [values, setValues] = useState({  email: "", password: ""})
    const [errors, setErrors] = useState(null)
    return (
        <div className="session-modal">
            <div className="session-form">
                <form onSubmit={login}>
                    <input type="text" value={values.email} name="email" onChange={handleInputChange}/>
                    <input type="text" vakue={values.password} name="password" onChange={handleInputChange}/>
                    <input type="submit" />
                    <button onClick={props.close}>Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default Login;