import React from 'react';
import SingleMeal from '../SingleMeal/SingleMeal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Meal = ({restuarants}) => {
    const restuarant = restuarants.meals;
    return (
            
            <Row className="grid justify-content-center row-cols-1 row-cols-sm-3 row-cols-md-4 ">
                
                {
                restuarant.map(meal => <SingleMeal
                key={meal.idMeal}
                meal={meal}
                ></SingleMeal>)
                }
                
            </Row>
        
    
    );
};

export default Meal;