/**
 Form for logging in a user
 */

import React, { useState } from 'react';
import axios from 'axios';

const login = (values) => {
    axios.post('/sessions', {
        user_params: values
    }).then(res => {
        debugger;
    })
}

const Signup = (props) => {
    const [values, setValues] = useState({  email: "", password: ""})
    const [errors, setErrors] = useState(null)
    return (
        <div className="session-modal">
            <div className="session-form">
                <form onSubmit={login(values)}>
                    <input type="text" />
                    <input type="text" />
                    <input type="submit" />
                    <button onClick={props.close}>Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;