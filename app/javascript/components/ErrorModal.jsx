import React from 'react';

const ErrorModal = (props) => {
debugger;
    return (
        <div className="error-modal">
            <div className="error-message-area">
                {props.errors}
            </div>  
        </div>
    )

}

export default ErrorModal