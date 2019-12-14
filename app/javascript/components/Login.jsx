/**
 Form for logging in a user
 */

import React, { useState } from 'react';
import axios from 'axios';
import $ from 'jquery';
import ErrorModal from './ErrorModal';
const csrfToken = document.querySelector('[name=csrf-token]').content
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

const Login = (props) => {
    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }

    const login = () => {
        event.preventDefault();
        $.ajax({
            url:'/session',
            method: 'POST',
            data: {
                user: values,
                authenticity_token: $('[name="csrf-token"]')[0].content
            }
        }).then(res => {
           props.update(res)
           props.close()
         }).catch( res => 
           { 
             setErrors(res.responseJSON);
         })
    }

    //TODO: move clearErrors to App.js 
    const clearErrors = () => {
        setErrors(null)
    }

    const [values, setValues] = useState({  email: "", password: ""})
    const [errors, setErrors] = useState(null)
    return (
        <div className="session-modal">
            <div className="session-form-container">
                <h2 className="session-form-label">Log In</h2>
                <form className="session-form" onSubmit={login}>
                    <input className="session-form-field"  type="text" value={values.email} name="email" onChange={handleInputChange} placeholder="Email"/>
                    <input className="session-form-field"  gittype="password" vakue={values.password} name="password" onChange={handleInputChange} placeholder="Password"/>
                    <div className="session-form-buttons">
                        <input className="session-submit" type="submit" />
                        <button className="session-cancel" onClick={props.close}>Cancel</button>
                    </div>
                </form>
            </div>
            {errors && <ErrorModal errors={errors} clear={clearErrors} />}
        </div>
    )
}

export default Login;