import React from 'react';

/**
 * Presents a "not found" page which will contain a link to the index page and a polite message
 */

const NotFound = (props) => {
    const {pageType, identifier} = props;
    return <div style={{"position":"relative", "top":"25rem"}}>
        <h3>location not found</h3>
    </div>
}

export default NotFound;