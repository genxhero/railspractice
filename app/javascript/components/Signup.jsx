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
    const [passwordIsPassword, setSpecialHell] = useState(false)
    const [validated, setValid] =useState({username: null, email: null, password: null, passwordConfirm: null})
    console.log(validated);
    return (
        <div className="session-modal">
            <div className="session-form">
                <form onSubmit={register}>
                    <input type="text" value={values.email} name="email" onChange={handleInputChange} placeholder="Email"/>
                    <input type="text" value={values.username} name="username" onChange={handleInputChange} placeholder="Username"/>
                    <input type="text" value={values.password} name="password" onChange={handleInputChange} placeholder="Password"/>
                    <input type="text" value={values.passwordConfirm} name="passwordConfirm" onChange={handleInputChange} placeholder="Confirm Password"/>
                    <input type="submit"/>
                    <button onClick={props.close}>Cancel</button>
                </form>
                <div>
                    {passwordIsPassword && <span>A SPECIAL HELL</span>}
                </div>
            </div>
            {errors && <ErrorModal errors={errors} clear={clearErrors} />}
        </div>
    )
}

export default Signup;