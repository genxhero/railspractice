/**
 * The following component renders a form for creating a restaurant.
 * Name and description are much the same as for the travel center.
 * Cuisine will be derived from a list of potential cuisines, while
 * Shop type will be a few radio buttons or checkboxes (since there are very few)
 */

import React, {useState} from 'react';

const RestaurantCreate = (props) => {
    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }

    const [values, setValues] = useState({name: '', description: '', cuisine: '', shopType: ''})
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
                <input 
                 className="place-form-text"
                 name='cuisine'
                 type="text"
                 placeholder="Cuisine"
                 onChange={handleInputChange}
                 value={values.cuisine}/>
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
        </div>
    </div>
    );
}

export default RestaurantCreate;