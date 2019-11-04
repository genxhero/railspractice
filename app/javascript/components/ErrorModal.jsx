import React from 'react';
import {FaTimes} from 'react-icons/fa';

const ErrorModal = (props) => {
    debugger;
    return (
        <div className="error-modal">
            <div className="error-message-area">
                <h3>The Following Errors Occured</h3>
                <ul>
                     {props.errors.map( error => {
                    return (
                        <li key={error}className="error-message">{error}</li>
                    )
                })
            } 
                </ul>
              
                <span className="error-dismiss-x" onClick={props.clear}><FaTimes /></span>
            </div>  
        </div>
    )

}

export default ErrorModal