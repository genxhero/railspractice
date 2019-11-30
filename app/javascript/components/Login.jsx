/**
 Form for logging in a user
 */

import React, { useState } from 'react';
import axios from 'axios';

const Login = (props) => {
    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }

    const login = () => {
        axios.post('/sessions', {
            user_params: values
        }).then(res => {
            debugger;
        })
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
                    <input type="text" value={values.email} name="email"/>
                    <input type="text" vakue={values.password} name="password"/>
                    <input type="submit" />
                    <button onClick={props.close}>Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default Login;