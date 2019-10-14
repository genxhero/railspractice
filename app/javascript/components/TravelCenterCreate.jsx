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
               <input 
                 name='name'
                 type="text"
                 onChange={handleInputChange}
                 value={values.name}/>
               <input 
                 type='text' 
                 name='description'
                 onChange={handleInputChange}
                 value={values.description}/>
            </div>
        </div>
    )
}
export default TravelCenterCreate;