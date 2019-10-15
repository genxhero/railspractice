import React, {useState}from 'react';

const TravelCenterCreate = (props) => {

    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }

    const [values, setValues] = useState({name: '', description: '', unleaded: 0, diesel: 0})
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
               <input 
                 className="place-form-text"
                 type='text' 
                 name='description'
                 placeholder="Description"
                 onChange={handleInputChange}
                 value={values.description}/>
                 <input
                    className="place-form-money"
                    name="unleaded"
                    onChange={handleInputChange}
                    value={values.unleaded} />
                <input
                    className="place-form-money"
                    name="diesel"
                    onChange={handleInputChange}
                    value={values.diesel} />
            </div>
        </div>
    )
}
export default TravelCenterCreate;