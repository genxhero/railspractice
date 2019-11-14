/**
 * Props
 *  formType: String; one of "Login" or "Register"
 */

import React, { useState } from 'react';
import axios from 'axios';

const Signup = (props) => {
    console.log("Pointing")
    const [values, setValues] = useState({email: "", password: "", confirm: ""})
    return (
        <div className="session-modal">
            <div className="session-form">

            </div>
        </div>
    )
}

export default Signup;