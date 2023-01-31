import React from 'react';
import { Button } from 'react-bootstrap';
import {useLoaderData, useNavigate} from 'react-router-dom'

const Userinfo = () => {
    const userinfo = useLoaderData();
    const {name, id} =userinfo;

    const navigate = useNavigate();
    const handleNavigate=()=>{
        navigate(`/restaurants/${id}`)
    }

    return (
        <div>
            <h2>This is name</h2>
            <h3>Name:{name}</h3>
            <Button onClick={handleNavigate}>Get Some</Button>
        </div>
    );
};

export default Userinfo;