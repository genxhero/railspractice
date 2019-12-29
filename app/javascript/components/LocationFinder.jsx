/**
 * Finds locations along highways.
 * Eventually planning to build a system by which locations may be found
 * on a route.
 */
import React, {useState, useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import HIGHWAYS from './constants';
import axios from 'axios';
import LocationFinderMap from './LocationFinderMap'

const LocationFinder = () => {

    const [locations, updateLocations] = useState(null)

    useEffect(() => {
        async function anyNameFunction() {
          await axios.get(`/api/locations`).then(res => {
              debugger
                  updateLocations(res.data)
          }).catch( res => {
            setErrors(res)
          });
        }
        anyNameFunction();
      }, []);

    if (!locations) {
        return <div style={{"position":"relative", "top":"25rem"}}>Loading</div>
    }
    debugger
    return (
        <div className="location-finder">
            <LocationFinderMap locations={locations} />
        </div>
    )
} 

export default withRouter(LocationFinder);

/**
 * Select highway, display all Locations on said highway on a map.
 * Provide links to said locations.
 * Maybe add a state option.
 * To or from might be too complicated
 */