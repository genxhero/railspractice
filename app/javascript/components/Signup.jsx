/**
 * form for sigining up a new user
 */

import React, { useState } from 'react';
import $ from 'jquery';
import ErrorModal from './ErrorModal';



const Signup = (props) => {
    const register = () => {
        event.preventDefault();
        $.ajax({
            url:'/api/users',
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

    const clearErrors = () => {
        setErrors(null)
    }

    const [values, setValues] = useState({username: "", email: "", password: "", confirm: ""})
    const [errors, setErrors] = useState(null)
    return (
        <div className="session-modal">
            <div className="session-form">
                <form onSubmit={register}>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="submit"/>
                    <button onClick={props.close}>Cancel</button>
                </form>
            </div>
            {errors && <ErrorModal errors={errors} clear={clearErrors} />}
        </div>
    )
}

export default Signup;