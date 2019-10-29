import React from 'react';

const ErrorModal = (props) => {
    return (
        <div className="error-modal">
            <div className="error-message-area">
                <h3>The Following Errors Occured</h3>
                {props.errors.map( error => {
                    return (
                        <div key={error}className="error-message">{error}</div>
                    )
                })
            }
                <button className="error-clear-btn" onClick={props.clear}>CLEAR</button>
            </div>  
        </div>
    )

}

export default ErrorModal