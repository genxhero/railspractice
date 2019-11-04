/**
 * For coffee shops, a few yes or no check boxes will be used for wifi, armchairs, and couches.
 * Shop Types include Drive Thru, Kiosk, and sit-down.
 * 
 * May add "serves breakfast" as a boolean as well.  Might encourage users to describe it verbally instead
 */

import React, {useState} from 'react';
import axios from 'axios';
import ErrorModal from './ErrorModal';


const CoffeeShopCreate = (props) => {
    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }

    /**
     * Makes a POST request to the coffee_shops_controller, found in app/controllers/
     */
    const handleSubmit = () => {
        axios.post('/coffee_shops', {
           restaurant: values
          }
        ).then( res => {
            props.update(res.data, "coffeeShop")
        }).then(res => {
            props.close();
        }).catch( res => {
            setErrors(res.response.data)
        })
    }

    const clearErrors = () => {
        setErrors(null)
    }

    const [values, setValues] = useState({name: '', description: '', shop_type: '', couches: false, armchairs: false, wifi: false})
    const [errors, setErrors] = useState(null)

    return (
        <div className="place-form-modal">
            <div className="place-form">
                <h2>New Coffee Shop</h2>
               <input 
                 className="place-form-text"
                 name='name'
                 type="text"
                 placeholder="Name"
                 onChange={handleInputChange}
                 value={values.name}/>
               <textarea 
                 className="place-form-text"
                 type='text' 
                 name='description'
                 placeholder="Description"
                 onChange={handleInputChange}
                 value={values.description}/>
                <div>
                    <button className="place-form-btn"onClick={props.close} >Cancel</button>
                </div>
                <span className="cancel-x" onClick={props.close}> X</span>
        </div>
        {errors && <ErrorModal errors={errors} clear={clearErrors}/>}
    </div>
    );
}

export default CoffeeShopCreate;