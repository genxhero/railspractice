/**
 * Form for creating a new travel center.
 * TODO: Make it dry, try to do something dynamic with type of place or something.
 * Right now the three types of place are too different. Might be better to have three
 * different form...the ajax action is going to hit a certain part of the api no matter what.
 * Maybe use a case statment
 */

import React, {useState}from 'react';
import axios from 'axios'

const TravelCenterCreate = (props) => {

    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }

    const handleSubmit = () => {
        axios.post('/locations', {
           values
          }
        )
    }

    const [values, setValues] = useState({name: '', description: '', unleaded: null, diesel: null})
    return (
        <div className="place-form-modal">
            <div className="place-form">
                <h2>New Travel Center</h2>
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
                 <input
                    className="place-form-text"
                    name="unleaded"
                    placeholder="Unleaded Price"
                    onChange={handleInputChange}
                    value={values.unleaded} />
                <input
                    className="place-form-text"
                    name="diesel"
                    placeholder="Diesel Price"
                    onChange={handleInputChange}
                    value={values.diesel} />
                <div>
                    <button className="place-form-btn"onClick={props.close} >Cancel</button>
                </div>
                <span className="cancel-x" onClick={props.close}> X</span>
                <button className="place-form-btn" onClick={ handleSubmit}></button>
            </div>
          
        </div>
    )
}
export default TravelCenterCreate;