
/**
 * Page for displaying a specific town
 * TODO:  Use the useState hook to check whether we are currently creating something, display a modal with the form
 */

import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import TravelCenter from './TravelCenter';
import CoffeeShop from './CoffeeShop';
import Restaurant from './Restaurant';
import TravelCenterCreate from './TravelCenterCreate';
import RestaurantCreate from './RestaurantCreate';
import CoffeeShopCreate from './CoffeeShopCreate';
import LodgingCreate from './LodgingCreate';
import PlaceCard from './PlaceCard';
import $ from 'jquery';
import axios from 'axios';
import {TEST_CLASSES} from './constants';
import {withRouter} from 'react-router-dom';
import NotFound from './NotFound';

 const LocationShow = (props) => {

    useEffect(() => {
        async function anyNameFunction() {
          await axios.get(`/api${window.location.pathname}`).then(res => {
              updatePlaces(res.data.places);
              updateLocation(res.data.location);
          }).catch( res => {
              debugger;
            setErrors(res)
          });
        }
        anyNameFunction();
      }, []);

    const [state, openForm] = useState({open: false, placeType: ''})
    const [errors, setErrors] = useState(null);
    const [location, updateLocation] = useState(null)
    const [places, updatePlaces] = useState(props.places)
    const testCase = props.currentUser ? TEST_CLASSES[props.currentUser.test_group] : "";


    const openModal = (placeType) => {
        $("html, body").animate({ scrollTop: 0 });
        $('body').css('overflow', 'hidden');
        openForm({open: true, placeType})
    }

    const closeModal = () => {
        $('body').css('overflow', 'auto');
        openForm({open: false, placeType: ""})
    }

    const update = (newPlace, placeType) => {
        switch (placeType){
            case "travelCenter":
                updatePlaces({travelCenters: [...places.travelCenters, newPlace], restaurants: [...places.restaurants], coffeeShops: [...places.coffeeShops], lodgings: [...places.lodgings]})
            break;
            case "restaurant":
                updatePlaces({restaurants: [...places.restaurants, newPlace], travelCenters: [...places.travelCenters], coffeeShops: [...places.coffeeShops], lodgings: [...places.lodgings]})
            //NO, THAT'S WRONG!
            break;
            case "coffeeShop":
                updatePlaces({restaurants: [...places.restaurants], travelCenters: [...places.travelCenters], coffeeShops: [...places.coffeeShops, newPlace], lodgings: [...places.lodgings]})
            break;
            case "lodging": 
                updatePlaces({restaurants: [...places.restaurants], travelCenters: [...places.travelCenters], coffeeShops: [...places.coffeeShops], lodgings: [...places.lodgings, newPlace]})
            break;
        }
    }


    if (!location) {
        return <div style={{"position":"relative", "top":"25rem"}}>Loading</div>
    }

    if (errors) {
        return <NotFound pageType="location" />
    }
    return (
        <div className={`location-show-page${testCase}`}>
            <h1>{location.name}, {location.state}</h1>
            <img className="location-show-image"src={location.image_url} alt={location.name}/>
            <div className="location-show-columns">
                <div className={`location-show-column${testCase}`}>
                    {places.coffeeShops.length === 0 && <h4>No Coffee Shops Recommended</h4>}
                {places.coffeeShops.map( coffeeShop => {
                        return <PlaceCard place={coffeeShop} key={coffeeShop.name} test={testCase}/>
                    })}
                    {(state.open && state.placeType === "coffeeShop") && <CoffeeShopCreate location_id={props.location.id} close={closeModal} update={update}/>}
                    <button onClick={ () => openModal('coffeeShop')}>Click Me</button>
                </div>

                <div className={`location-show-column${testCase}`}>
                {places.restaurants.length === 0 && <h4>No Restaurants Recommended</h4>}

                {places.restaurants.map( restaurant => {
                         return <PlaceCard place={restaurant} key={restaurant.name} test={testCase}/>
                    })}
                    {(state.open && state.placeType === "restaurant") && <RestaurantCreate location_id={props.location.id} close={closeModal} update={update}/>}
                    <button onClick={ () => openModal('restaurant')}>Click Me</button>
                </div>

                <div className={`location-show-column${testCase}`}>
                {places.travelCenters.length === 0 && <h4>No Travel Centers Recommended</h4>}
                    {places.travelCenters.map( travelCenter => {
                        return <PlaceCard place={travelCenter} key={travelCenter.name} test={testCase}/>
                    })}
                    {(state.open && state.placeType === "travelCenter") && <TravelCenterCreate location_id={props.location.id} close={closeModal} update={update}/>}
                    <button onClick={ () => openModal('travelCenter')}>Click Me</button>
                </div>


                <div className={`location-show-column${testCase}`}>
                {places.lodgings.length === 0 && <h4>No Lodgings Recommended</h4>}
                    {places.lodgings.map( lodging => {
                        return <PlaceCard place={lodging} key={lodging.name} test={testCase}/>
                    })}
                    {(state.open && state.placeType === "lodging") && <LodgingCreate location_id={props.location.id} close={closeModal} update={update}/>}
                    <button onClick={ () => openModal('lodging')}>Click Me</button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(LocationShow);