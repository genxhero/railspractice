/**
 * Props
 *  formType: String; one of "Login" or "Register"
 */

import React, { useState } from 'react';
import axios from 'axios';

const SessionForm = (props) => {
    console.log("Pointing")
    const [values, setValues] = useState({})
    return (
        <div className="session-modal">
            <div className="session-form">

            </div>
        </div>
    )
}