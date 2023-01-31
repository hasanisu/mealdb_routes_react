import React from 'react';
import { Button } from 'react-bootstrap';
import {useLoaderData, useNavigate} from 'react-router-dom'
import MealDetail from '../MealDetail/MealDetail';

const MealDetails = () => {
    const restuarants = useLoaderData();
    const mealDetail = (restuarants.meals[0]);
    const {idMeal, strMeal, strArea} = mealDetail;

    // const navigate = useNavigate();
    // const handleNavigate =()=>{
    //         navigate(`/users/${idMeal}`)
    // }
    
    return (
        <div>
            <h1>Meal Details Page: {idMeal}</h1>
            <h2>Everything you need to know from here!!</h2>
            <p>Meal Name :{strMeal} </p>
            <p><small>Meal Area{strArea}</small></p>
            {/* <Button onClick={handleNavigate}>Get Autohor</Button> */}
        </div>
    );
};

export default MealDetails;