import React from 'react';
import { Button } from 'react-bootstrap';
import {Link} from "react-router-dom";

const SingleMeal = ({ meal }) => {
    // console.log(meal)
    const { strMealThumb, strArea, strMeal, idMeal } = meal;
    


    return (

        <div className='border border-primary rounded m-3 mb-5 '>
            <div className='mb-5 pb-5'>
            <img src={strMealThumb} className='img-fluid mt-3 mb-3 rounded' alt="" ></img>
            <h2>Dish Name: {strMeal}</h2>
            <h5 className='mb-4 pb-4'>Country Name: {strArea}</h5>
            <Link to={`/singlemeal/${idMeal}`}> 
            <Button >Meal Details</Button>
            </Link>
            
            </div>
           
        </div>

    );
};

export default SingleMeal;