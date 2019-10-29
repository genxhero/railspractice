import React from 'react';

const ErrorModal = (props) => {
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
              
                <button className="error-clear-btn" onClick={props.clear}>OK</button>
            </div>  
        </div>
    )

}

export default ErrorModal