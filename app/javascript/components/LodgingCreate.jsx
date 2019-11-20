/**
 * The following component renders a form to create a new lodgng, which can be one of
 * 4 types: Hotel, Motel, Trailer Park, Campground,
 */

import React, {useState} from 'react';
import {LODGING_TYPES} from './constants';
import axios from 'axios'
import ErrorModal from './ErrorModal';

const RestaurantCreate = (props) => {
    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }
    const handleSubmit = () => {
        axios.post('/lodgings', {
           lodging: values
          }
        ).then( res => {
            props.update(res.data, "lodging")
        }).then(res => {
            props.close();
        }).catch( res => {
            setErrors(res.response.data)
        })
    }

    const clearErrors = () => {
        setErrors(null)
    }

    const [values, setValues] = useState({name: '', description: '', type: LODGING_TYPES[0], location_id: props.location_id})
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
                <div>
                    <button className="place-form-btn" onClick={ handleSubmit}>Create</button>
                    <button className="place-form-btn"onClick={props.close} >Cancel</button>
                </div>
                <span className="cancel-x" onClick={props.close}> X</span>
        </div>
        {errors && <ErrorModal errors={errors} clear={clearErrors}/>}
    </div>
    );
}

export default RestaurantCreate;