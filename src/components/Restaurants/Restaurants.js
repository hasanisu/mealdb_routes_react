import React from 'react';
import {useLoaderData} from "react-router-dom";
import Meal from '../Meal/Meal';

const Restaurants = () => {
    const restuarants = useLoaderData ();
    return (
        <div>
            <div>
                <h2 className='mb-5 pb-5 mt-5 pt-5 text-info bg-dark sticky-top'>Please Order from the restaurant!!! Limited Offer!!!</h2>
                <Meal restuarants={restuarants}></Meal>
            </div>
        </div>
    );
};

export default Restaurants;