/**
 * The following component renders a form for creating a restaurant.
 * Name and description are much the same as for the travel center.
 * Cuisine will be derived from a list of potential cuisines, while
 * Shop type will be a few radio buttons or checkboxes (since there are very few)
 */

import React, {useState} from 'react';
import {CUISINES} from './constants';


const RestaurantCreate = (props) => {
    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }
    const handleSubmit = () => {
        axios.post('/restaurants', {
           values
          }
        )
    }

    const [values, setValues] = useState({name: '', description: '', cuisine: '', shopType: ''})
    console.log(values);
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
                    name='shopType'
                    value='Sit Down'
                    onChange={handleInputChange}
                    type="radio"
                /> 
                Sit Down
                <span className="checkmark"></span>
                </label>
              
              <label className="place-form-radio-container">
                    <input className="place-form-radio"
                        name='shopType'
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
                    <button className="place-form-btn"onClick={props.close} >Cancel</button>
                </div>
                <span className="cancel-x" onClick={props.close}> X</span>
        </div>
    </div>
    );
}

export default RestaurantCreate;