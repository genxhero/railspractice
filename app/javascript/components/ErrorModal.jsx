import React from 'react';

const ErrorModal = (props) => {
    console.log(props.errors)
    return (
        <div className="error-modal">
            <div className="error-message-area">
                
                <button className="error-clear-btn" onClick={props.clear}>Clear></button>
            </div>  
        </div>
    )

}

export default ErrorModal