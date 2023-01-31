import React from 'react';
import {Link} from 'react-router-dom'
const User = ({user}) => {
    const {id, name, email, username} = user;
    return (
        <div className='mb-5 pb-5 mt-5'>
            <h2>Name:{name}</h2>
            <h3>Email: {email}</h3>
            <Link to={`/user/${id}`}>{username}</Link>
        </div>
    );
};

export default User;