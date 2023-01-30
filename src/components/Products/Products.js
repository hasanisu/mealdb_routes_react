import React from 'react';
import {useLoaderData} from "react-router-dom";
import Meal from '../Meal/Meal';

const Products = () => {
    const products = useLoaderData();
    
    
    return (
        <div>
            <h2>I am from Product</h2>
            <Meal products={products}></Meal>
        </div>
    );
};

export default Products;