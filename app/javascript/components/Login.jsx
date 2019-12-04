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

    // const login = () => {
    //     event.preventDefault();
    //     axios.post('/session', {
    //         user: values,
    //         url: window.location.pathname
    //     }).then(res => {
    //       props.update(res.data)
    //     }).then(
    //         props.close()
    //     ).catch( res => 
    //        { 
    //         let buffer = "buffer"
    //            debugger;
    //         let blood  = "copiusly"
    //     })
    // }

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
         }).then(
             props.close()
         ).catch( res => 
           { 
             setErrors(res.responseJSON);
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
                    <input type="text" value={values.email} name="email" onChange={handleInputChange}/>
                    <input type="password" vakue={values.password} name="password" onChange={handleInputChange}/>
                    <input type="submit" />
                    <button onClick={props.close}>Cancel</button>
                </form>
            </div>
            {errors && <ErrorModal errors={errors} />}
        </div>
    )
}

export default Login;