import React, {useState} from 'react';

const PlacesPanel = (props) => {
    const [activePanel, setPanel] = useState()
    return (
        <div className="places-panel">
            <div className="places-nav">
             <div className={`places-tab${activePanel === 'Travel Centers' ? '-active' : 'inactive'}`}>
                Travel Centers
             </div>
            </div>
            <div className="places-panel-content">

            </div>
        </div>
    )
}