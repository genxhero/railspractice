import React from 'react';

const NotFound = (props) => {
    const {pageType, identifier} = props;
    return <div style={{"position":"relative", "top":"25rem"}}>
        <h3>location not found</h3>
    </div>
}

export default NotFound;