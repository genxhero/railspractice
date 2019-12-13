/**
 * form for sigining up a new user
 */

import React, { useState } from 'react';
import $ from 'jquery';
import ErrorModal from './ErrorModal';



const Signup = (props) => {

    const validateInput = (name, value) => {
        switch(name) {
            case "password":
                    setSpecialHell(false);
                if (value.toLowerCase() === "password") {
                    setSpecialHell(true);
                    setValid({...validated, [name]: false})
                } else if (value.length < 8) {
                    setValid({...validated, [name]: false})
                } else {
                    setValid({...validated, [name]: true})
                }
                break;
            case "username":
                setValid({...validated, [name]: /^[a-zA-Z\d-_]+$/.test(value)})
                break;
            case "email":
                setValid({...validated, [name]: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)})
                break;
            case "passwordConfirm":
                setValid({...validated, [name]: value === values.password})
                break
        }
    }

    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
        validateInput(name, value);
    }

    const register = () => {
        event.preventDefault();
        $.ajax({
            url:'/api/users',
            method: 'POST',
            data: {
                //I had to destructure here since password confirmation was causing Rails to fail.  s
                //TODO: refactor so that password confirm uses its own function
                user: {
                    username: values.username,
                    email: values.email,
                    password: values.password,
                    first_name: values.first_name,
                    last_name: values.last_name
                },
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
    const [passwordIsPassword, setSpecialHell] = useState(false)
    const [validated, setValid] =useState({username: null, email: null, password: null, confirm: null})
    return (
        <div className="session-modal">
            <div className="session-form-container">
                <form className="session-form" onSubmit={register}>
                    <input className="session-form-field" type="text" value={values.email} name="email" onChange={handleInputChange} placeholder="Email"/>
                    <input className="session-form-field"  type="text" value={values.username} name="username" onChange={handleInputChange} placeholder="Username"/>
                    <input className="session-form-field"  type="text" value={values.first_name} name="first_name" onChange={handleInputChange} placeholder="First Name (Can be fake)"/>
                    <input className="session-form-field"  type="text" value={values.last_name} name="last_name" onChange={handleInputChange} placeholder="Last Name (Can be fake)"/>
                    <input className="session-form-field" type="text" value={values.password} name="password" onChange={handleInputChange} placeholder="Password"/>
                    <input className="session-form-field"  type="text" value={values.confirm} name="confirm" onChange={handleInputChange} placeholder="Confirm Password"/>
                    <div className="session-form-buttons">
                        <input className="session-submit" type="submit"/>
                        <button className= "session-cancel" onClick={props.close}>Cancel</button>
                    </div>
                  
                </form>
                <div>
                    {passwordIsPassword && <span>PASSWORD CAN NOT LITERALLY BE "PASSWORD"!</span>}
                </div>
            </div>
            {errors && <ErrorModal errors={errors} clear={clearErrors} />}
        </div>
    )
}

export default Signup;