import React, {useState} from 'react';

const PlacesPanel = (props) => {
    const [activePanel, setPanel] = useState("travelCenters")
    const selectPane = (e) => {
       let active = e.currentTarget.getAttribute("name");
       setPanel(active);
    }
    return (
        <div className="places-panel">
            <div className="places-nav">
             <div className={`places-tab${activePanel === 'travelCenters' ? '-active' : 'inactive'}`} 
                  onClick={selectPane}
                  name="travelCenters"
                  >
                Travel Centers
             </div>
             <div className={`places-tab${activePanel === 'coffeeShops' ? '-active' : 'inactive'}`}
              onClick={selectPane}
              name="coffeeShops"
             >
                Coffee Shops
             </div>
             <div className={`places-tab${activePanel === 'restaurants' ? '-active' : 'inactive'}`}
              onClick={selectPane}
              name="restaurants"
             >
                Restaurants
             </div>

             <div className={`places-tab${activePanel === 'lodgings' ? '-active' : 'inactive'}`}
              onClick={selectPane}
              name="lodgings"
             >
                Lodging
             </div>

            </div>
            <div className="places-panel-content">
               
            </div>
        </div>
    )
}

export default PlacesPanel;