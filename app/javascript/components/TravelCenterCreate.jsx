import React, {useState}from 'react';

const TravelCenterCreate = (props) => {

    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }

    const [values, setValues] = useState({name: '', description: '', unleaded: null, diesel: null})
    console.log(values);
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
            </div>
          
        </div>
    )
}
export default TravelCenterCreate;