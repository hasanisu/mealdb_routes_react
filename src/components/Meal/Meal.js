import React from 'react';
import SingleMeal from './SingleMeal/SingleMeal';

const Meal = ({products}) => {
    const product = products.meals;
    console.log(product);
    return (
        <div>
            {
                product.map(meal => <SingleMeal
                key={meal.idMeal}
                meal={meal}
                ></SingleMeal>)
            }
        </div>
    );
};

export default Meal;