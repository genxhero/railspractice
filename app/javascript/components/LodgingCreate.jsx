/**
 * The following component renders a form to create a new lodgng, which can be one of
 * 4 types: Hotel, Motel, Trailer Park, Campground,
 */

import React, {useState} from 'react';
import {LODGING_TYPES, BREAKFAST, WIFI, CHANNELS} from './constants';
import axios from 'axios'
import ErrorModal from './ErrorModal';

const RestaurantCreate = (props) => {
    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }

    const handleCheckboxClick = (e) => {
        const {name, value } = e.target
        if (e.target.checked ) {
            const newArray = [...values[name], value]
            setValues({...values, [name]: newArray})
        } else {
            const newArray = values[name].filter(el => el !== value);
            setValues({...values, [name]: newArray})
        }
       
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

    const [values, setValues] = useState({name: '', description: '', lodging_type: LODGING_TYPES[0], location_id: props.location_id, breakfast: null, wifi: null, channels: [], pool: null})
    const [errors, setErrors] = useState(null)

    console.log(values.channels);
    return (
        <div className="place-form-modal">
            <div className="place-form">
                <h2>New Lodging</h2>
               <input 
                 className="place-form-text"
                 name='name'
                 type="text"
                 placeholder="Name"
                 onChange={handleInputChange}
                 value={values.name}/>
                 
                <select 
                 className="place-form-text"
                 name='lodging_type'
                 placeholder="Lodging Type"
                 onChange={handleInputChange}
                 value={values.lodging_type}>
                {LODGING_TYPES.map( type => {
                    return <option value={type}>{type}</option>
                })}     
                </select>

                <select 
                 className="place-form-text"
                 name='breakfast'
                 placeholder="Breakfast"
                 onChange={handleInputChange}
                 value={values.breakfast}>
                {BREAKFAST.map( type => {
                    return <option value={type}>{type}</option>
                })}     
                </select>

                <select 
                 className="place-form-text"
                 name='wifi'
                 placeholder="Wifi"
                 onChange={handleInputChange}
                 value={values.wifi}>
                {WIFI.map( type => {
                    return <option value={type}>{type}</option>
                })}     
                </select>

               <div style={{"display":"flex"}}>
                   <div style={{"display":"flex", "flexDirection":"column", "margin":".8rem"}}>
                   <span>Gym</span>
                    <label className="place-form-radio-container">
                                        <input className="place-form-radio"
                                        name='gym'
                                        value={true}
                                        onChange={handleInputChange}
                                        type="radio"
                                    /> 
                                    Yes
                                    <span className="checkmark"></span>
                                    </label>
                                
                                <label className="place-form-radio-container">
                                        <input className="place-form-radio"
                                            name='gym'
                                            value={false}
                                            onChange={handleInputChange}
                                            type="radio"
                                            />
                                    No
                                    <span className="checkmark"></span>
                                </label>
                   </div>
                   <div style={{"display":"flex", "flexDirection":"column", "margin":".8rem"}}>
                   <span>Swimming Pool</span>
                     <label className="place-form-radio-container">
                         <input className="place-form-radio"
                            name='pool'
                            value={true}
                            onChange={handleInputChange}
                            type="radio"
                        /> 
                        Yes
                        <span className="checkmark"></span>
                        </label>
                
                            <label className="place-form-radio-container">
                                <input className="place-form-radio"
                                    name='pool'
                                    value={false}
                                    onChange={handleInputChange}
                                    type="radio"
                                    />
                            No
                            <span className="checkmark"></span>
                         </label>
                     </div>
                    </div>
                    <div className="place-form-checkbox-area">
                        {CHANNELS.map( channel => {
                            return <label key={channel}>
                                {channel}
                                <input type="checkbox" name="channels" value={channel} onChange={handleCheckboxClick}/>
                            </label>
                        })}
                    </div>
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