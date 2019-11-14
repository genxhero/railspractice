/**
 * Props
 *  formType: String; one of "Login" or "Register"
 */

import React, { useState } from 'react';
import axios from 'axios';

const register = (values) => {

}

const Signup = (props) => {
    console.log("Pointing")
    const [values, setValues] = useState({username: "", email: "", password: "", confirm: ""})
    return (
        <div className="session-modal">
            <div className="session-form">
                <form onSubmit={register(values)}>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default Signup;