/**
 * Form for creating a new travel center.
 * TODO: Make it dry, try to do something dynamic with type of place or something.
 * Right now the three types of place are too different. Might be better to have three
 * different form...the ajax action is going to hit a certain part of the api no matter what.
 * Maybe use a case statment
 * 
 *  * TODO: Migrate from Axios to Ajax.
 */

import React, {useState}from 'react';
import ErrorModal from './ErrorModal';
import axios from 'axios'
import $ from 'jquery';

const TravelCenterCreate = (props) => {

    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }

    /**
     * Makes an Axios request to the Rails server and attempts to save to the database.
     * Because the Location show page renders server side, there isn't a need to set state.
     * TODO: Deprecate in favor of Ajax
     * TODO: Add way to add lat and lng.
     */
    const handleSubmit = () => {
        axios.post('/travel_centers', {
           travel_center: values
          }
        ).then( res => {
            props.update(res.data, "travelCenter")
        }).then(res => {
            props.close();
        }).catch( res => {
            setErrors(res.response.data)
        })
    }

    const clearErrors = () => {
        setErrors(null)
    }

    const [values, setValues] = useState({name: '', description: '', unleaded: 0, diesel: 0, location_id: props.location_id, address: ''})
    const [errors, setErrors] = useState(null)
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
                <input
                    className="place-form-text"
                    name="address"
                    placeholder="Address"
                    onChange={handleInputChange}
                    value={values.address} />
                <div>
                    <button className="place-form-btn" onClick={ handleSubmit}>Create</button>
                    <button className="place-form-btn"onClick={props.close} >Cancel</button>
                </div>
                <div> <a href="https://www.latlong.net/convert-address-to-lat-long.html">Find Coordinates Here</a> </div>
                <span className="cancel-x" onClick={props.close}> X</span>
              
            </div>
          {errors && <ErrorModal errors={errors} clear={clearErrors}/>}
        </div>
    )
}
export default TravelCenterCreate;