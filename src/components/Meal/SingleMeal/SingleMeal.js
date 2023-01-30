import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SingleMeal = ({meal}) => {
    const {strMealThumb, strArea, strMeal } = meal;
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col lg="3">
                    <div>
                        <img src={strMealThumb} alt="" ></img>
                        <h2>Dish Name: {strMeal}</h2>
                        <h5>Country Name: {strArea}</h5>
                    </div>
                </Col>


                {/* <Col md="auto">Variable width content</Col>
                <Col xs lg="2">3 of 3</Col> */}
            
            </Row>
        </Container>
    );
};

export default SingleMeal;