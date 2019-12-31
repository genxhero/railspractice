/**
 * The following component renders a form for creating a restaurant.
 * Name and description are much the same as for the travel center.
 * Cuisine will be derived from a list of potential cuisines, while
 * Shop type will be a few radio buttons or checkboxes (since there are very few)
 */

import React, {useState} from 'react';
import {CUISINES} from './constants';
import axios from 'axios'
import ErrorModal from './ErrorModal';

const RestaurantCreate = (props) => {
    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }
    const handleSubmit = () => {
        axios.post('/restaurants', {
           restaurant: values
          }
        ).then( res => {
            props.update(res.data, "restaurant")
        }).then(res => {
            props.close();
        }).catch( res => {
            setErrors(res.response.data)
        })
    }

    const clearErrors = () => {
        setErrors(null)
    }

    const [values, setValues] = useState({name: '', description: '', cuisine: CUISINES[0], shop_type: '', location_id: props.location_id, address: ''})
    const [errors, setErrors] = useState(null)

    return (
        <div className="place-form-modal">
            <div className="place-form">
                <h2>New Restaurant</h2>
               <input 
                 className="place-form-text"
                 name='name'
                 type="text"
                 placeholder="Name"
                 onChange={handleInputChange}
                 value={values.name}/>
                <select 
                 className="place-form-text"
                 name='cuisine'
                 placeholder="Cuisine"
                 onChange={handleInputChange}
                 value={values.cuisine}>
                {CUISINES.map( cuisine => {
                    return <option value={cuisine}>{cuisine}</option>
                })}     
                </select>

                <label className="place-form-radio-container">
                    <input className="place-form-radio"
                    name='shop_type'
                    value='Sit Down'
                    onChange={handleInputChange}
                    type="radio"
                /> 
                Sit Down
                <span className="checkmark"></span>
                </label>
              
              <label className="place-form-radio-container">
                    <input className="place-form-radio"
                        name='shop_type'
                        value='Fast Food'
                        onChange={handleInputChange}
                        type="radio"
                        />
                  Fast Food
                  <span className="checkmark"></span>
              </label>
               

               <textarea 
                 className="place-form-text"
                 type='text' 
                 name='description'
                 placeholder="Description"
                 onChange={handleInputChange}
                 value={values.description}/>
                <input
                    className="place-form-text"
                    name="address"
                    placeholder="Address"
                    onChange={handleInputChange}
                    value={values.address} />
                <div></div>
                <div>
                    <button className="place-form-btn" onClick={ handleSubmit}>Create</button>
                    <button className="place-form-btn"onClick={props.close} >Cancel</button>
                </div>
                <div> <a href="https://www.latlong.net/convert-address-to-lat-long.html">Find Coordinates Here</a> </div>
                <span className="cancel-x" onClick={props.close}> X</span>
        </div>
        {errors && <ErrorModal errors={errors} clear={clearErrors}/>}
    </div>
    );
}

export default RestaurantCreate;