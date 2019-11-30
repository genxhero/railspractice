/**
 * form for sigining up a new user
 */

import React, { useState } from 'react';
import axios from 'axios';

const register = (values) => {

}

const Signup = (props) => {
    const [values, setValues] = useState({username: "", email: "", password: "", confirm: ""})
    const [errors, setErrors] = useState(null)
    return (
        <div className="session-modal">
            <div className="session-form">
                <form onSubmit={register(values)}>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="submit"/>
                    <button onClick={props.close}>Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;